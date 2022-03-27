import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecapituatifComponent} from "./recapituatif/recapituatif.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";

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
    MatTableModule,
  ]
})
export class CoinbaseModule {
}
