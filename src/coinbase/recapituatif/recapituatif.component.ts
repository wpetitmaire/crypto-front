import {Component, OnInit} from '@angular/core';
import {CoinbaseRecap} from "./interfaces/recapitulatif.interface";
import {RecapitulatifService} from "./services/recapitulatif.service";
import {faPiggyBank} from '@fortawesome/free-solid-svg-icons';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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
  dataSource = ELEMENT_DATA;
  defaultAccountIcon = faPiggyBank;

  globalRecap = new Array<CoinbaseRecap>();

  // globalRecap: CoinbaseRecap[] = [
  //   {
  //     "accountId": "ADA",
  //     "accountName": "Cardano",
  //     "unitPrice": 1.0549,
  //     "unitPriceDeltaVariation": 0.02,
  //     "amount": 417.829422,
  //     "amountPrice": 440.7682572678,
  //     "amountPriceDeltaVariation": 9.69,
  //     "weekHistory": [
  //       {
  //         "date": "26-03-2022",
  //         "price": 0.999
  //       },
  //       {
  //         "date": "27-03-2022",
  //         "price": 1.0474
  //       },
  //       {
  //         "date": "28-03-2022",
  //         "price": 1.0781
  //       },
  //       {
  //         "date": "29-03-2022",
  //         "price": 1.0645
  //       },
  //       {
  //         "date": "30-03-2022",
  //         "price": 1.0732
  //       },
  //       {
  //         "date": "31-03-2022",
  //         "price": 1.0635
  //       }
  //     ],
  //     "iconUrl": "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/cardano.png"
  //   },
  //   {
  //     "accountId": "XTZ",
  //     "accountName": "Tezos",
  //     "unitPrice": 3.53,
  //     "unitPriceDeltaVariation": 0.16,
  //     "amount": 0.051824,
  //     "amountPrice": 0.18293872,
  //     "amountPriceDeltaVariation": 0.01,
  //     "weekHistory": [
  //       {
  //         "date": "26-03-2022",
  //         "price": 3.22
  //       },
  //       {
  //         "date": "27-03-2022",
  //         "price": 3.33
  //       },
  //       {
  //         "date": "28-03-2022",
  //         "price": 3.52
  //       },
  //       {
  //         "date": "29-03-2022",
  //         "price": 3.37
  //       },
  //       {
  //         "date": "30-03-2022",
  //         "price": 3.4
  //       },
  //       {
  //         "date": "31-03-2022",
  //         "price": 3.43
  //       }
  //     ],
  //     "iconUrl": "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/tezos.png"
  //   },
  //   {
  //     "accountId": "SOL",
  //     "accountName": "Solana",
  //     "unitPrice": 121.4,
  //     "unitPriceDeltaVariation": 10.30,
  //     "amount": 2.657566325,
  //     "amountPrice": 322.6285518550,
  //     "amountPriceDeltaVariation": 27.37,
  //     "weekHistory": [
  //       {
  //         "date": "26-03-2022",
  //         "price": 89.86
  //       },
  //       {
  //         "date": "27-03-2022",
  //         "price": 92.61
  //       },
  //       {
  //         "date": "28-03-2022",
  //         "price": 97.46
  //       },
  //       {
  //         "date": "29-03-2022",
  //         "price": 96.23
  //       },
  //       {
  //         "date": "30-03-2022",
  //         "price": 100.5
  //       },
  //       {
  //         "date": "31-03-2022",
  //         "price": 108.25
  //       }
  //     ],
  //     "iconUrl": "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/sol-rune---rune-game.png"
  //   },{
  //     "accountId": "ETH2",
  //     "accountName": "Ethereum 2",
  //     "unitPrice": 3124.92,
  //     "unitPriceDeltaVariation": 156.43,
  //     "amount": 0.06928074,
  //     "amountPrice": 216.4967700408,
  //     "amountPriceDeltaVariation": 10.84,
  //     "weekHistory": [
  //       {
  //         "date": "26-03-2022",
  //         "price": 2827.18
  //       },
  //       {
  //         "date": "27-03-2022",
  //         "price": 2864.9
  //       },
  //       {
  //         "date": "28-03-2022",
  //         "price": 3000.51
  //       },
  //       {
  //         "date": "29-03-2022",
  //         "price": 3034.0
  //       },
  //       {
  //         "date": "30-03-2022",
  //         "price": 3067.37
  //       },
  //       {
  //         "date": "31-03-2022",
  //         "price": 3033.72
  //       }
  //     ],
  //     "iconUrl": ""
  //   }
  // ]

  constructor(recapService: RecapitulatifService) {
    console.log("--> RecapituatifComponent - constructor")
    recapService.getGlobalRecap().subscribe(result => this.globalRecap = result);
  }

  ngOnInit(): void {
    console.log("--> RecapituatifComponent.ngOnInit")
  }

}
