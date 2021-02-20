/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TermotransferComponent } from './termotransfer.component';

describe('TermotransferComponent', () => {
  let component: TermotransferComponent;
  let fixture: ComponentFixture<TermotransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermotransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermotransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
