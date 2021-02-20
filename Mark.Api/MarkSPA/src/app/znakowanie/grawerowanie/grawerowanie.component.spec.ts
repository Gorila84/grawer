/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrawerowanieComponent } from './grawerowanie.component';

describe('GrawerowanieComponent', () => {
  let component: GrawerowanieComponent;
  let fixture: ComponentFixture<GrawerowanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrawerowanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrawerowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
