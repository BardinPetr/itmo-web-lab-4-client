import {Injectable} from '@angular/core';
import {PointCheckDTO} from "../libmodel/pointCheckDTO";

@Injectable({
  providedIn: 'root'
})
export class PointCheckService {

  constructor() {
  }

  public check(request: PointCheckDTO) {
    console.log(`Sending point check request:`)
    console.log(request)
  }
}
