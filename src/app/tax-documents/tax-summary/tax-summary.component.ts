import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ITransactionSummary } from '../shared/transaction.model';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-tax-summary',
  templateUrl: './tax-summary.component.html',
  styleUrls: ['./tax-summary.component.css']
})
export class TaxSummaryComponent implements OnInit {
  summary = {} as ITransactionSummary
  headers: any;
  spresp: any;


  constructor(private api: RestService) {

  }

  getSummary() {
    this.api.getTaxSummary()
      .subscribe(resp => {
        console.log(resp);
        const keys = resp.headers.keys();
        this.headers = keys.map((key: any) =>
          `${key}: ${resp.headers.get(key)}`);
        var response = resp.body!;
        console.log(response.totalTransactions);
        this.summary.totalClients = response.totalClients;
        this.summary.totalTransactions = response.totalTransactions;
        this.summary.totalAmount = response.totalAmount;
        this.summary.fileCount = response.fileCount;

      });
  }

  ngOnInit() {
    this.getSummary()
  }
}
