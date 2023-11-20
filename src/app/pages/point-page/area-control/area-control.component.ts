import {Component, OnInit} from '@angular/core';
import {rangeByConstraint} from "../../../utils/iter";
import {FormControl} from "@angular/forms";
import {AreaScaleService} from "../../../services/area-scale.service";
import {ConstraintsService} from "../../../services/constraints/constraints.service";
import {DoubleRange} from "itmo-web-lab4";
import {floatRangeValidator} from "../../../directives/float-range-validator.directive";

@Component({
  selector: 'app-area-control',
  templateUrl: './area-control.component.html',
  styleUrls: ['./area-control.component.sass']
})
export class AreaControlComponent implements OnInit {
  valueSteps: number[] = []
  rValueControl: FormControl<number>

  constructor(private areaConfig: AreaScaleService,
              private constraints: ConstraintsService) {
    this.rValueControl = new FormControl<number>(
      Math.round(this.areaConfig.config.value.r),
      {nonNullable: true}
    )

    this
      .rValueControl
      .valueChanges
      .subscribe(x => this.areaConfig.setScale(x))
  };

  ngOnInit(): void {
    this
      .constraints
      .rConstraint
      .subscribe(this.setup.bind(this))
  }

  private setup(constraint: DoubleRange) {
    this.rValueControl.validator = floatRangeValidator(constraint)
    this.valueSteps = rangeByConstraint(constraint)
      .filter(i => i !== 0)
  }
}
