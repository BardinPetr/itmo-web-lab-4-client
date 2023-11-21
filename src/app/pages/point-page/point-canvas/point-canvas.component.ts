import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PointsService} from "../../../services/points.service";
import {PointCheckService} from "../../../services/point-check.service";
import {combineLatest, map, zip} from 'rxjs';
import {ActiveElement, ChartConfiguration, ChartData, ChartEvent} from "chart.js";
import {ConstraintsService} from "../../../services/constraints.service";
import {getRelativePosition} from "chart.js/helpers";
import {AreaControllerService, PointResultDTO} from "itmo-web-lab4";
import {AreaScaleService} from "../../../services/area-scale.service";
import {BaseChartDirective} from "ng2-charts";
import {rangeCount} from "../../../utils/iter";

@Component({
  selector: 'app-point-canvas',
  templateUrl: './point-canvas.component.html',
  styleUrls: ['./point-canvas.component.sass']
})
export class PointCanvasComponent implements AfterViewInit {
  @ViewChild(BaseChartDirective)
  chart?: BaseChartDirective;

  public options: ChartConfiguration<'scatter'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        filter: ({datasetIndex}) => datasetIndex === 0
      }
    },
    animation: false,
    maintainAspectRatio: false,
    // aspectRatio: 1,
    scales: {
      x: {
        min: -1,
        max: 1,
        position: 'center',
        ticks: {
          stepSize: 1
        }
      },
      y: {
        min: -1,
        max: 1,
        position: 'center',
        ticks: {
          stepSize: 1
        }
      },
    },
    interaction: {
      mode: "point"
    },
    onClick: this.onClick.bind(this)
  };

  public data: ChartData<'scatter'> = {
    datasets: [
      {
        data: [],
        pointRadius: 5,
        pointBackgroundColor: (ctx: any) => {
          const data: PointResultDTO = ctx.element?.$context?.raw;
          if (!data || data.areaR !== this.area.config.getValue().r) return 'gray'
          return data.inside ? 'green' : 'red'
        },
        parsing: {
          xAxisKey: 'pointX',
          yAxisKey: 'pointY'
        }
      }
    ]
  }

  private readonly defaultPolygonConfig = {
    type: 'line',
    fill: 'shape',
    borderColor: '#9638EB77',
    backgroundColor: '#9638EB77',
    pointStyle: false
  }

  constructor(private pointService: PointsService,
              private checkService: PointCheckService,
              private area: AreaScaleService,
              private constraints: ConstraintsService,
              private polygonService: AreaControllerService) {
  }

  ngAfterViewInit(): void {
    zip(this.constraints.xConstraint, this.constraints.yConstraint)
      .subscribe(([xRange, yRange]) => {
        this.updateAxis('x', xRange)
        this.updateAxis('y', yRange)
      })

    this
      .pointService
      .data
      .subscribe(data => {
        // @ts-ignore
        this.data.datasets[0].data = data
        this.chart?.update()
      })

    combineLatest([
      this.polygonService.area().pipe(map(this.parseAreas.bind(this))),
      this.area.areaScale
    ])
      .pipe(map(this.scaleDatasets.bind(this)))
      .subscribe(data => {
        this.data.datasets = [
          this.data.datasets[0],
          ...data
        ]
        this.chart?.update()
      })
  }

  private onClick(event: ChartEvent, elements: ActiveElement[], chart: any) {
    const canvasPosition = getRelativePosition(event, chart);
    this.checkService.check({
      x: chart.scales['x'].getValueForPixel(canvasPosition.x),
      y: chart.scales['y'].getValueForPixel(canvasPosition.y)
    })
  }

  private updateAxis(axis: 'x' | 'y', range: DoubleRange) {
    this.options!.scales![axis]!.min = range.min
    this.options!.scales![axis]!.max = range.max
    this.chart?.render()
    this.chart?.update()
  }

  private scaleDatasets([datasets, scale]: [any, number]): any {
    return datasets
      .map((dataset: any) => ({
          ...dataset,
          data: dataset.data.map(({x, y}: any) =>
            ({x: x * scale, y: y * scale})
          )
        })
      )
  }

  private parseAreas(x: any): any {
    switch (x.type) {
      case 'GenericArea':
        return x['subareas']!.map(this.parseAreas.bind(this))
      case 'AreaPolygon':
        return {
          ...this.defaultPolygonConfig,
          data: x['points']
        }
      case 'AreaCircle':
        const {center, radius, angleStartRadians, angleEndRadians} = x
        return {
          ...this.defaultPolygonConfig,
          data: [
            ...rangeCount(angleStartRadians, angleEndRadians, 50)
              .map(phi => ({x: radius * Math.cos(phi), y: radius * Math.sin(phi)})),
            center
          ]
        }
    }
    return x
  }
}
