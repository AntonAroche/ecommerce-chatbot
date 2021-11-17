import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreitemComponent } from './storeitem.component';

describe('StoreitemComponent', () => {
  let component: StoreitemComponent;
  let fixture: ComponentFixture<StoreitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
