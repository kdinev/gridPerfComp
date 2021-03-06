import { Component, OnInit } from '@angular/core';
import { DataGenService } from '../services/data-gen.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ag-grid-base',
  templateUrl: './ag-grid-base.component.html',
  styleUrls: ['./ag-grid-base.component.scss']
})

export class AgGridBaseComponent implements OnInit {
  columnDefs = [
    {headerName: 'ID', field: 'ID', width: 60},
    {headerName: 'Category', field: 'Category', width: 120},
    {headerName: 'Type', field: 'Type', width: 100},
    {headerName: 'Spread', field: 'Spread', width: 90},
    {headerName: 'Open Price', field: 'OpenPrice', width: 90},
    {headerName: 'Price', field: 'Price', width: 90},
    {headerName: 'Buy', field: 'Buy', width: 90},
    {headerName: 'Sell', field: 'Sell', width: 90},
    {headerName: 'Change', field: 'Change', width: 90},
    {headerName: 'Change(%)', field: 'ChangePercent'},
    {headerName: 'Volume', field: 'Volume'},
    {headerName: 'High(D)', field: 'HighD'},
    {headerName: 'Low(D)', field: 'LowD'},
    {headerName: 'High(Y)', field: 'HighY'},
    {headerName: 'Low(Y)', field: 'LowY'},
    {headerName: 'Start(Y)', field: 'StartY'},
    {headerName: 'Low(Y)', field: 'LowY'},
    {headerName: 'Spread', field: 'Spread'}

    // ,{headerName: 'A', field: 'A'},
    // {headerName: 'B', field: 'B'},
    // {headerName: 'C', field: 'C'},
    // {headerName: 'D', field: 'D'},
    // {headerName: 'E', field: 'E'},
    // {headerName: 'F', field: 'F'},
    // {headerName: 'G', field: 'G'},
    // {headerName: 'H', field: 'H'},
    // {headerName: 'I', field: 'I'},
    // {headerName: 'J', field: 'J'},
    // {headerName: 'K', field: 'K'},
    // {headerName: 'L', field: 'L'},
    // {headerName: 'M', field: 'M'},
    // {headerName: 'N', field: 'N'},
    // {headerName: 'O', field: 'O'},
    // {headerName: 'P', field: 'P'},
    // {headerName: 'Q', field: 'Q'},
    // {headerName: 'R', field: 'R'},
    // {headerName: 'S', field: 'S'},
    // {headerName: 'T', field: 'T'},
    // {headerName: 'U', field: 'U'},
    // {headerName: 'V', field: 'V'},
    // {headerName: 'W', field: 'W'},
    // {headerName: 'X', field: 'X'},
    // {headerName: 'Y', field: 'Y'},
    // {headerName: 'Z', field: 'Z'},
    // {headerName: 'AA', field: 'AA'},
    // {headerName: 'AB', field: 'AB'},
    // {headerName: 'AC', field: 'AC'},
    // {headerName: 'AD', field: 'AD'},
    // {headerName: 'AE', field: 'AE'},
    // {headerName: 'AF', field: 'AF'},
    // {headerName: 'AG', field: 'AG'},
    // {headerName: 'AH', field: 'AH'},
    // {headerName: 'AI', field: 'AI'},
    // {headerName: 'AJ', field: 'AJ'},
    // {headerName: 'AK', field: 'AK'},
    // {headerName: 'AL', field: 'AL'},
    // {headerName: 'AM', field: 'AM'},
    // {headerName: 'AN', field: 'AN'},
    // {headerName: 'AO', field: 'AO'},
    // {headerName: 'AP', field: 'AP'},
    // {headerName: 'AQ', field: 'AQ'},
    // {headerName: 'AR', field: 'AR'},
    // {headerName: 'AS', field: 'AS'},
    // {headerName: 'AT', field: 'AT'},
    // {headerName: 'AU', field: 'AU'},
    // {headerName: 'AV', field: 'AV'},
    // {headerName: 'AW', field: 'AW'},
    // {headerName: 'AX', field: 'AX'},
    // {headerName: 'AY', field: 'AY'},
    // {headerName: 'AZ', field: 'AZ'},
    // {headerName: 'BA', field: 'BA'},
    // {headerName: 'BB', field: 'BB'},
    // {headerName: 'BC', field: 'BC'},
    // {headerName: 'BD', field: 'BD'},
    // {headerName: 'BE', field: 'BE'},
    // {headerName: 'BF', field: 'BF'},
    // {headerName: 'BG', field: 'BG'},
    // {headerName: 'BH', field: 'BH'},
    // {headerName: 'BI', field: 'BI'},
    // {headerName: 'BJ', field: 'BJ'},
    // {headerName: 'BK', field: 'BK'},
    // {headerName: 'BL', field: 'BL'},
    // {headerName: 'BM', field: 'BM'},
    // {headerName: 'BN', field: 'BN'},
    // {headerName: 'BO', field: 'BO'},
    // {headerName: 'BP', field: 'BP'},
    // {headerName: 'BQ', field: 'BQ'},
    // {headerName: 'BR', field: 'BR'},
    // {headerName: 'BS', field: 'BS'},
    // {headerName: 'BT', field: 'BT'},
    // {headerName: 'BU', field: 'BU'},
    // {headerName: 'BV', field: 'BV'},
    // {headerName: 'BW', field: 'BW'},
    // {headerName: 'BX', field: 'BX'},
    // {headerName: 'BY', field: 'BY'},
    // {headerName: 'BZ', field: 'BZ'},
    // {headerName: 'CA', field: 'CA'},
    // {headerName: 'CB', field: 'CB'}
  ];

  public data: Observable<any[]>;

  constructor(private finDataService: DataGenService) {
    this.data = this.finDataService.records;
  }


  ngOnInit() {
  }

}



