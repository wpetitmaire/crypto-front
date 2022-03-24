import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'coinbase',
    loadChildren: () => import('../coinbase/coinbase-routing.module').then(module => module.CoinbaseRoutingModule)
  },
  { path: '', redirectTo: 'coinbase', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// ./coinbase/coinbase-routing.module#CoinbaseRoutingModule
