import {NgModule} from "@angular/core";
import {FloatRangeDescriptionPipe} from "./float-range.pipe";

@NgModule({
  exports: [
    FloatRangeDescriptionPipe
  ],
  declarations: [FloatRangeDescriptionPipe]
})
export class PipesModule {
}
