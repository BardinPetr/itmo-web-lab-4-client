import {NgModule} from "@angular/core";
import {AreaScaleService} from "./area-scale.service";
import {ConstraintsService} from "./constraints/constraints.service";

@NgModule({
  providers: [AreaScaleService, ConstraintsService]
})
export class ServicesModule {
}
