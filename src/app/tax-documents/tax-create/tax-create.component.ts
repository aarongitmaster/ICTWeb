import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-tax-create',
  templateUrl: './tax-create.component.html',
  styleUrls: ['./tax-create.component.css']
})
export class TaxCreateComponent {
  progress: number;
  message: string;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private api: RestService,private http: HttpClient) { }
  ngOnInit() {
  }

  uploadFile = (files: any) => {

    this.message = 'Upload started.';

    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    

    //this.http.post('https://icttaxapi.azurewebsites.net/api/v1', formData, { reportProgress: true, observe: 'events' })
    this.api.postTaxDocument(formData)
      .subscribe({
        next: (event) => {
          if (event.type === HttpEventType.UploadProgress)
            this.progress = Math.round(100 * event.loaded / event.total!);
          else if (event.type === HttpEventType.Response) {
            this.message = 'Upload success.';
            this.onUploadFinished.emit(event.body);
          }
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }
}
