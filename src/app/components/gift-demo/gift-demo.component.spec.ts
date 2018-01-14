import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftDemoComponent } from './gift-demo.component';

describe('GiftDemoComponent', () => {
  let component: GiftDemoComponent;
  let fixture: ComponentFixture<GiftDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
