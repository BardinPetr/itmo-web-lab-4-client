import {Injectable} from '@angular/core';
import {PointControllerService, PointRequestDTO} from "itmo-web-lab4";
import {PointsService} from "./points.service";

@Injectable({
  providedIn: 'root'
})
export class PointCheckService {

  constructor(private api: PointControllerService,
              private pointService: PointsService) {
  }

  public check(request: PointRequestDTO) {
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
