import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDacsanComponent } from './detail-dacsan.component';

describe('DetailDacsanComponent', () => {
  let component: DetailDacsanComponent;
  let fixture: ComponentFixture<DetailDacsanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailDacsanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailDacsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
