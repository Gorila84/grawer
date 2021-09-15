/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MarkRangeComponent } from './markRange.component';

describe('MarkRangeComponent', () => {
  let component: MarkRangeComponent;
  let fixture: ComponentFixture<MarkRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
