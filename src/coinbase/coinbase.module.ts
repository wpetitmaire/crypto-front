import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecapituatifComponent} from "./recapituatif/recapituatif.component";

@NgModule({
  declarations: [
    RecapituatifComponent
  ],
  exports: [
    RecapituatifComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoinbaseModule {
}
