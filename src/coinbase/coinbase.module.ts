import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecapituatifComponent} from "./recapituatif/recapituatif.component";
import {MatNativeDateModule} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CdkAccordionModule} from "@angular/cdk/accordion";

@NgModule({
  declarations: [
    RecapituatifComponent
  ],
  exports: [
    RecapituatifComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CdkAccordionModule,
  ]
})
export class CoinbaseModule {
}
