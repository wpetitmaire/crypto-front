import {Component, Input, OnInit} from '@angular/core';
import {WalletRecap} from "../../coinbase/recapituatif/interfaces/recapitulatif.interface";
import {KpiType} from "./kpi.interface";



/**
 * Created by willy on 06/04/2022
 */
@Component({
  selector: 'kpi',
  templateUrl: './Kpi.component.html',
  styleUrls: ['./Kpi.component.scss']
})
export class KpiComponent implements OnInit {

  @Input() libel!: string;
  @Input() value!: number | string;
  @Input() type!: KpiType;
  @Input() showColor = true;

  kpiTypes = KpiType;

  constructor() {
  }

  ngOnInit(): void {
    console.log("-->KpiComponent.onInit")
  }

}
