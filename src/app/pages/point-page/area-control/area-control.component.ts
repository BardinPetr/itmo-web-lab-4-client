import {Component, OnInit} from '@angular/core';
import {rangeByConstraint} from "../../../utils/iter";
import {FormControl, Validators} from "@angular/forms";
import {AreaScaleService} from "../../../services/area-scale.service";
import {ConstraintsService} from "../../../services/constraints/constraints.service";

@Component({
  selector: 'app-area-control',
  templateUrl: './area-control.component.html',
  styleUrls: ['./area-control.component.sass']
})
export class AreaControlComponent implements OnInit {
  valueSteps: number[] = []
  rValueControl = new FormControl<number>(
    1, [Validators.required]
  );

  constructor(private areaScale: AreaScaleService,
              private constraints: ConstraintsService) {
    this.rValueControl.setValue(areaScale.scale)
  }

  ngOnInit(): void {
    this.valueSteps = rangeByConstraint(this.constraints.rConstraint)

    this
      .rValueControl
      .valueChanges
      .subscribe(x => this.areaScale.setScale(x!))
  }
}
