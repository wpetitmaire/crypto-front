import {Component, OnInit} from '@angular/core';

/**
 * Created by willy on 23/03/2022
 */
@Component({
  selector: 'cb-recapitulatif',
  templateUrl: './recapituatif.component.html',
  styleUrls: ['./recapituatif.component.scss']
})
export class RecapituatifComponent implements OnInit {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
