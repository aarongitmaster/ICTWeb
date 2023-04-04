import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { ITransaction } from './shared/transaction.model'
import {  Router } from '@angular/router';;

@Component({
  selector: 'tax-documents-detail',
  templateUrl: './tax-documents-detail.component.html',
  styleUrls: ['./tax-documents-detail.component.css'],
})
export class TaxDocumentsDetailComponent  {
  @Output() emitter = new EventEmitter
  @Input() transactionArray: ITransaction[];

  constructor(private _router: Router) {
  }
 

  sortBy(sortValue: string) {
    console.log('emiter')
    console.log(sortValue)
    this.emitter.emit(sortValue)
    //this._router.navigate(['/tax-documents', { queryParams: { sortValue: sortValue } }]);
  }

  
}
