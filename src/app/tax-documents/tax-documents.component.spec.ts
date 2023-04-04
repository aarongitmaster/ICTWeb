import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDocumentsComponent } from './tax-documents.component';

describe('TaxDocumentsComponent', () => {
  let component: TaxDocumentsComponent;
  let fixture: ComponentFixture<TaxDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
