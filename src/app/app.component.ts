import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ICT Tax Web';
  searchTerm: string = "";

  constructor(private _router: Router, private _route: ActivatedRoute) {

  }

  searchTransactions(searchTerm: string) {
    this._router.navigate(['/client/' + searchTerm]);
  };

}
