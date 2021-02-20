/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SublimacjaComponent } from './sublimacja.component';

describe('SublimacjaComponent', () => {
  let component: SublimacjaComponent;
  let fixture: ComponentFixture<SublimacjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublimacjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublimacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
