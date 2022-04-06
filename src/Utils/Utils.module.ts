import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KpiComponent} from "./Kpi/Kpi.component";
import {MatCardModule} from "@angular/material/card";

/**
 * Created by willy on 06/04/2022
 */
@NgModule({
  declarations: [
    KpiComponent
  ],
  exports: [
    KpiComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class UtilsModule {
}
