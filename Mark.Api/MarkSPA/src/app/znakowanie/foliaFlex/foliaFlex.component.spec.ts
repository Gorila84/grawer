/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoliaFlexComponent } from './foliaFlex.component';

describe('FoliaFlexComponent', () => {
  let component: FoliaFlexComponent;
  let fixture: ComponentFixture<FoliaFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoliaFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoliaFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
