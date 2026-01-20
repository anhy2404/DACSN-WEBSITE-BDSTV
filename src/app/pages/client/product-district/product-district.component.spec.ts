import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDistrictComponent } from './product-district.component';

describe('ProductDistrictComponent', () => {
  let component: ProductDistrictComponent;
  let fixture: ComponentFixture<ProductDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDistrictComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
