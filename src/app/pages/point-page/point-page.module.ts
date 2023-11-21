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
import {InputTextModule} from "primeng/inputtext";
import {PipesModule} from "../../pipes/pipes.module";
import {MessageModule} from "primeng/message";
import {ChipModule} from "primeng/chip";
import {NgChartsModule} from 'ng2-charts';

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
    ReactiveFormsModule,
    InputTextModule,
    PipesModule,
    MessageModule,
    ChipModule,
    NgChartsModule
  ],
  exports: [
    PointPageComponent
  ]
})
export class PointPageModule {
}
