import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruurbanComponent } from './carruurban.component';

describe('CarruurbanComponent', () => {
  let component: CarruurbanComponent;
  let fixture: ComponentFixture<CarruurbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruurbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruurbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
