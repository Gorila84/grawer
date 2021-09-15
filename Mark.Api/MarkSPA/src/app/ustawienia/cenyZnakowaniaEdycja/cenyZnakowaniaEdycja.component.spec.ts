/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CenyZnakowaniaEdycjaComponent } from './cenyZnakowaniaEdycja.component';

describe('CenyZnakowaniaEdycjaComponent', () => {
  let component: CenyZnakowaniaEdycjaComponent;
  let fixture: ComponentFixture<CenyZnakowaniaEdycjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenyZnakowaniaEdycjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenyZnakowaniaEdycjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
