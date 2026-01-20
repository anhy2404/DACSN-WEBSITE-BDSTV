import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DacsanComponent } from './dacsan.component';

describe('DacsanComponent', () => {
  let component: DacsanComponent;
  let fixture: ComponentFixture<DacsanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DacsanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DacsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
