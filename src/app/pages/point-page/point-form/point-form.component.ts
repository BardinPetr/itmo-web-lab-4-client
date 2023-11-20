import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {rangeByConstraint} from "../../../utils/iter";
import {ConstraintsService} from "../../../services/constraints.service";
import {AreaScaleService} from "../../../services/area-scale.service";
import {DoubleRange, Point, PointRequestDTO} from "itmo-web-lab4";
import {floatRangeValidator} from "../../../directives/float-range-validator.directive";
import {PointCheckService} from "../../../services/point-check.service";
import {zip} from "rxjs";

@Component({
  selector: 'app-point-form',
  templateUrl: './point-form.component.html',
  styleUrls: ['./point-form.component.sass']
})
export class PointFormComponent implements OnInit {
  xOptions: number[] = []
  form: FormGroup

  constructor(public areaConfig: AreaScaleService,
              public constraints: ConstraintsService,
              private pointCheck: PointCheckService) {
    this.form = new FormGroup({
      x: new FormControl<number | null>(null),
      y: new FormControl<number | null>(null)
    })
  }

  get point(): Point | null {
    return this.form.invalid ? null : this.form.value;
  }

  get isInvalid(): boolean {
    return this.form.invalid || this.areaConfig.config.value.r == 0
  }

  ngOnInit() {
    zip(this.constraints.xConstraint, this.constraints.yConstraint)
      .subscribe(this.setup.bind(this))
  }

  send() {
    if (this.form.invalid) return

    let request: PointRequestDTO = {
      point: this.point!,
      area: this.areaConfig.config.getValue()
    }

    this.pointCheck.check(request)
  }

  private setup([xRange, yRange]: DoubleRange[]) {
    this.xOptions = rangeByConstraint(xRange)
    this.form.controls["x"].validator = floatRangeValidator(xRange)
    this.form.controls["y"].validator = floatRangeValidator(yRange)
  }
}
