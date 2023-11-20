import {Injectable} from '@angular/core';
import {AreaConfig} from "itmo-web-lab4";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AreaScaleService {

  public readonly config = new BehaviorSubject<AreaConfig>({r: 1})

  constructor() {
  }

  get areaScale(): Observable<number> {
    return this
      .config
      .asObservable()
      .pipe(map(x => x.r))
  }

  public setScale(value: number) {
    console.warn(`Changed R=${value}`)
    this.config.next({
      ...this.config.getValue(),
      r: value
    })
  }
}
