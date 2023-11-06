import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaScaleService {

  private value: number = 1

  constructor() {
  }

  public setScale(value: number) {
    console.warn(`Changed R=${value}`)
    this.value = value;
  }

  get scale(): number {
    return this.value
  }
}
