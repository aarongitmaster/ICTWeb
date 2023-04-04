import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxClientComponent } from './tax-client.component';

describe('TaxClientComponent', () => {
  let component: TaxClientComponent;
  let fixture: ComponentFixture<TaxClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
