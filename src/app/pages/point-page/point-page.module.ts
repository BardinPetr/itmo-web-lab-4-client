import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PointFormComponent} from './point-form/point-form.component';
import {PointTableComponent} from './point-table/point-table.component';
import {PointCanvasComponent} from './point-canvas/point-canvas.component';
import {PointPageComponent} from './point-page.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {AreaControlComponent} from './area-control/area-control.component';
import {RadioButtonModule} from "primeng/radiobutton";
import {ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [
    PointFormComponent,
    PointTableComponent,
    PointCanvasComponent,
    PointPageComponent,
    AreaControlComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    CardModule,
    ReactiveFormsModule
  ],
  exports: [
    PointPageComponent
  ]
})
export class PointPageModule {
}
