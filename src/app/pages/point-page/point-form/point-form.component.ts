import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {rangeByConstraint} from "../../../utils/iter";
import {ConstraintsService} from "../../../services/constraints/constraints.service";
import {Point} from "../../../libmodel/point";
import {AreaScaleService} from "../../../services/area-scale.service";
import {PointCheckDTO} from "../../../libmodel/pointCheckDTO";
import {floatRangeValidator} from "../../../directives/float-range-validator.directive";
import {PointCheckService} from "../../../services/point-check.service";

@Component({
  selector: 'app-point-form',
  templateUrl: './point-form.component.html',
  styleUrls: ['./point-form.component.sass']
})
export class PointFormComponent {
  xOptions: number[] = []
  form: FormGroup

  constructor(public areaConfig: AreaScaleService,
              public constraints: ConstraintsService,
              private pointCheck: PointCheckService) {
    this.xOptions = rangeByConstraint(constraints.xConstraint)

    this.form = new FormGroup({
      x: new FormControl<number | null>(null, floatRangeValidator(constraints.xConstraint)),
      y: new FormControl<number | null>(null, floatRangeValidator(constraints.yConstraint))
    })
  }

  get point(): Point | null {
    return this.form.invalid ? null : this.form.value;
  }

  get isInvalid(): boolean {
    return this.form.invalid || this.areaConfig.config.value.r == 0
  }

  send() {
    if (this.form.invalid) return

    let request: PointCheckDTO = {
      point: this.point!,
      area: this.areaConfig.config.getValue()
    }

    this.pointCheck.check(request)
  }
}
