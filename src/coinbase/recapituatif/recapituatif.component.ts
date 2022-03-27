import {Component, OnInit} from '@angular/core';
import {CoinbaseRecap} from "./interfaces/recapitulatif.interface";
import {RecapitulatifService} from "./services/recapitulatif.service";

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

  globalRecap = new Array<CoinbaseRecap>();

  constructor(recapService: RecapitulatifService) {
    console.log("--> RecapituatifComponent - constructor")
    recapService.getGlobalRecap().subscribe(
      response => this.globalRecap = response, null, () => {
        console.log(this.globalRecap) }
      );
  }

  ngOnInit(): void {
    console.log("--> RecapituatifComponent.ngOnInit")
  }

}
