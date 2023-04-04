import { OnInit } from '@angular/core';
import { Component} from '@angular/core';
import { ITransaction } from './shared/transaction.model';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tax-documents',
  templateUrl: './tax-documents.component.html',
  styleUrls: ['./tax-documents.component.css']
})
export class TaxDocumentsComponent implements OnInit {
  transactions: ITransaction[] = [];
  sortValue: any;
  page: number = 1;
  headers: any;
  spresp: any;
  postdata: ITransaction | undefined;

  constructor(private api: RestService, private route: ActivatedRoute) {

  }

  getTransaction(sortValue: string) {
    this.transactions =[]
    this.api.getTaxTransactions(sortValue)
      .subscribe(resp => {
        console.log(resp);
        const keys = resp.headers.keys();
        this.headers = keys.map((key: any) =>
          `${key}: ${resp.headers.get(key)}`);
        let response = resp.body!
        for (const transaction of response.transactions!) {
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
    //this.sortValue = this.route.snapshot.paramMap.get('sortValue')
    //console.log(this.route.snapshot.queryParamMap)
    this.sortValue='date'
    this.getTransaction(this.sortValue)
    
  }

  updateDataView(sortValue:string) {
    this.sortValue = sortValue;
    this.getTransaction(this.sortValue)
  }
}
