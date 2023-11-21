import {NgModule} from "@angular/core";
import {AreaScaleService} from "./area-scale.service";
import {ConstraintsService} from "./constraints.service";
import {PointCheckService} from "./point-check.service";
import {PointsService} from "./points.service";

@NgModule({
  providers: [
    AreaScaleService,
    ConstraintsService,
    PointCheckService,
    PointsService,
  ]
})
export class ServicesModule {
}
