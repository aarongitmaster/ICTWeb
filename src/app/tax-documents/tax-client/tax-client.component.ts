import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ITransaction } from '../shared/transaction.model';
import { RestService } from '../../rest.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tax-client',
  templateUrl: './tax-client.component.html',
  styleUrls: ['./tax-client.component.css']
})
export class TaxClientComponent {
  transactions: ITransaction[] = [];
  clientName: any;
  sortValue: any;
  headers: any;
  spresp: any;
  postdata: ITransaction | undefined;
 

  constructor(private api: RestService, private route: ActivatedRoute) {

  }

  getTransaction(clientName: string, sortValue:string) {
    this.transactions= []

    this.api.getTaxClientTransactions(clientName, sortValue)
      .subscribe(resp => {
        console.log(resp);
        const keys = resp.headers.keys();
        this.headers = keys.map((key: any) =>
          `${key}: ${resp.headers.get(key)}`);
        for (const transaction of resp.body!) {
          this.transactions.push({
            transactionDate: transaction.transactionDate,
            clientName: transaction.clientName,
            description: transaction.description,
            amount: transaction.amount,
            fileName: transaction.fileName,
            fileUrl: transaction.fileUrl,
            uploadedDate: transaction.uploadedDate
          });
        }
      });
  }

  ngOnInit() {
    //this._route.snapshot.params['name']
    this.clientName = this.route.snapshot.paramMap.get('name')
    this.sortValue = 'date'
    this.getTransaction(this.clientName, this.sortValue)
  }

  updateDataView(sortValue: string) {
    this.sortValue = sortValue;
    this.getTransaction(this.clientName, sortValue)
  }
}
