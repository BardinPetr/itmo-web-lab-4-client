import {Injectable} from '@angular/core';
import {Point, PointControllerService, PointRequestDTO} from "itmo-web-lab4";
import {PointsService} from "./points.service";
import {AreaScaleService} from "./area-scale.service";

@Injectable({
  providedIn: 'root'
})
export class PointCheckService {

  constructor(private api: PointControllerService,
              private pointService: PointsService,
              private areaConfig: AreaScaleService) {
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
          this.pointService.insertLocal(result)
        }),
        error: ((error) => {
          console.error("Point check error")
          console.error(error)
          // TODO UI
        })
      })
  }
}
