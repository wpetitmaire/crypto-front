import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecapituatifComponent} from "./recapituatif/recapituatif.component";
import {CoinbaseModule} from "./coinbase.module";

export const coinbaseRouteList: Routes = [
  {
    path: 'recapitulatif',
    component: RecapituatifComponent,
    data: {
      title: "Récapitulatif"
    },
  },
  { path: '', redirectTo: 'recapitulatif', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CoinbaseModule,
    RouterModule.forChild(coinbaseRouteList)
  ]
})
export class CoinbaseRoutingModule {
}
