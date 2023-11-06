import {Component, OnInit} from '@angular/core';
import {rangeByConstraint} from "../../../utils/iter";
import {FormControl} from "@angular/forms";
import {AreaScaleService} from "../../../services/area-scale.service";
import {ConstraintsService} from "../../../services/constraints/constraints.service";
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
    const r = Math.round(areaConfig.config.value.r)
    this.rValueControl = new FormControl<number>(
      r,
      {
        validators: [floatRangeValidator(constraints.rConstraint)],
        nonNullable: true
      }
    )

    this.valueSteps = rangeByConstraint(this.constraints.rConstraint)
  };

  ngOnInit(): void {
    this
      .rValueControl
      .valueChanges
      .subscribe(x => this.areaConfig.setScale(x))
  }
}
