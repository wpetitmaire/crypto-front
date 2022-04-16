import {Component, OnInit} from '@angular/core';
import {CoinbaseRecap, WalletRecap} from "./interfaces/recapitulatif.interface";
import {RecapitulatifService} from "./services/recapitulatif.service";
import {faPiggyBank, faArrowTrendDown, faArrowTrendUp} from '@fortawesome/free-solid-svg-icons';
import {KpiType} from "../../Utils/Kpi/kpi.interface";


/**
 * Created by willy on 23/03/2022
 */
@Component({
  selector: 'cb-recapitulatif',
  templateUrl: './recapituatif.component.html',
  styleUrls: ['./recapituatif.component.scss']
})
export class RecapituatifComponent implements OnInit {

  displayedColumns: string[] = ['accountId', 'unitPrice', 'amount', 'amountPrice'];

  defaultAccountIcon = faPiggyBank;
  faArrowTrendDown = faArrowTrendDown;
  faArrowTrendUp = faArrowTrendUp;

  globalRecap = new Array<CoinbaseRecap>();
  walletRecap!: WalletRecap;
  kpiType = KpiType;

  refreshingCurrencies = false;

  constructor(private recapService: RecapitulatifService) {
    this.recapService = recapService;
    console.log("--> RecapituatifComponent - constructor")

  }

  refreshData(forceRefresh: boolean): void {


    if (forceRefresh)
      this.refreshingCurrencies = true;

    this.recapService.getCurrenciesHealth(forceRefresh).subscribe(result => {
      this.globalRecap = result;
      this.refreshingCurrencies = false;
    });

    this.recapService.getWalletHealth(forceRefresh).subscribe(result => this.walletRecap = result);
  }

  ngOnInit(): void {
    console.log("--> RecapituatifComponent.ngOnInit")
    this.refreshData(false);
  }

}
