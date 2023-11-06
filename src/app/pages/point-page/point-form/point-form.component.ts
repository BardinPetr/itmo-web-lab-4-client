import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {rangeByConstraint} from "../../../utils/iter";
import {ConstraintsService} from "../../../services/constraints/constraints.service";
import {Point} from "../../../libmodel/point";

@Component({
  selector: 'app-point-form',
  templateUrl: './point-form.component.html',
  styleUrls: ['./point-form.component.sass']
})
export class PointFormComponent {
  xOptions: number[] = []
  form: FormGroup

  constructor(constraints: ConstraintsService) {
    this.xOptions = rangeByConstraint(constraints.xConstraint)

    this.form = new FormGroup({
      x: new FormControl<number | null>(null),
      y: new FormControl<number | null>(null)
    })
  }

  get point(): Point | null {
    return this.form.invalid ? null : this.form.value;
  }

  send() {
    if (this.form.invalid) return
    console.warn(this.point)
  }
}
