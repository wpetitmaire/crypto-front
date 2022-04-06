import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecapituatifComponent} from "./recapituatif/recapituatif.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {UtilsModule} from "../Utils/Utils.module";

@NgModule({
  declarations: [
    RecapituatifComponent,
  ],
  exports: [
    RecapituatifComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    FlexLayoutModule,
    FontAwesomeModule,
    UtilsModule
  ]
})
export class CoinbaseModule {
}
