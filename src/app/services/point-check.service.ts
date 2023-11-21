import {Injectable} from '@angular/core';
import {Point, PointControllerService, PointRequestDTO} from "itmo-web-lab4";
import {PointsService} from "./points.service";
import {AreaScaleService} from "./area-scale.service";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root',
})
export class PointCheckService {
  constructor(private api: PointControllerService,
              private pointService: PointsService,
              private areaConfig: AreaScaleService,
              private message: MessageService) {
  }

  public check(point: Point) {
    const request: PointRequestDTO = {
      point: {
        x: Number(point.x.toFixed(6)),
        y: Number(point.y.toFixed(6))
      },
      area: this.areaConfig.config.getValue()
    }

    console.log(`Sending point check request:`)
    console.log(request)

    this.api
      .create(request)
      .subscribe({
        next: (result => {
          console.info(`Check ID=${result.id} -> ${result.inside}`)
          this.message.add({
            summary: 'Checked!',
            detail: `Point is ${result.inside ? "in" : "out"}side of area`,
            severity: result.inside ? 'success' : 'warn'
          })
          this.pointService.insertLocal(result)
        }),
        error: ((error) => {
          console.error("Point check error")
          console.error(error)
          this.message.add({
            summary: 'Failed to check',
            detail: 'Invalid request',
            severity: 'error'
          });
        })
      })
  }
}
