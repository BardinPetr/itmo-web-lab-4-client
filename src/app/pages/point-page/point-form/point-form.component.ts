import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {rangeByConstraint} from "../../../utils/iter";
import {ConstraintsService} from "../../../services/constraints/constraints.service";
import {Point} from "../../../libmodel/point";
import {AreaScaleService} from "../../../services/area-scale.service";
import {PointCheckDTO} from "../../../libmodel/pointCheckDTO";
import {floatRangeValidator} from "../../../directives/float-range-validator.directive";

@Component({
  selector: 'app-point-form',
  templateUrl: './point-form.component.html',
  styleUrls: ['./point-form.component.sass']
})
export class PointFormComponent {
  xOptions: number[] = []
  form: FormGroup

  constructor(private areaConfig: AreaScaleService,
              public constraints: ConstraintsService) {
    this.xOptions = rangeByConstraint(constraints.xConstraint)

    this.form = new FormGroup({
      x: new FormControl<number | null>(null, floatRangeValidator(constraints.xConstraint)),
      y: new FormControl<number | null>(null, floatRangeValidator(constraints.yConstraint))
    })
  }

  get point(): Point | null {
    return this.form.invalid ? null : this.form.value;
  }

  send() {
    if (this.form.invalid) return

    let request: PointCheckDTO = {
      point: this.point!,
      area: this.areaConfig.config.getValue()
    }

    console.log(`Sending point check request:`)
    console.log(request)
  }
}
