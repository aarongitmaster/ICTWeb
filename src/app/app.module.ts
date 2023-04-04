import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaxDocumentsComponent } from './tax-documents/tax-documents.component';
import { TaxDocumentsDetailComponent } from './tax-documents/tax-documents-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { TaxSummaryComponent } from './tax-documents/tax-summary/tax-summary.component';
import { TaxClientComponent } from './tax-documents/tax-client/tax-client.component';
import { TaxCreateComponent } from './tax-documents/tax-create/tax-create.component';


@NgModule({
  declarations: [
    AppComponent,
    TaxDocumentsComponent,
    TaxDocumentsDetailComponent,
    PageNotFoundComponent,
    TaxSummaryComponent,
    TaxClientComponent,
    TaxCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'summary', component: TaxSummaryComponent },
      { path: 'client/:name', component: TaxClientComponent},
      { path: 'client', component: TaxClientComponent },
      { path: 'upload', component: TaxCreateComponent },
      { path: 'tax-documents', component: TaxDocumentsComponent },
      { path: 'tax-documents?sortValue', component: TaxDocumentsComponent },
      { path: '', redirectTo: '/tax-documents', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
