/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoliaFlockComponent } from './foliaFlock.component';

describe('FoliaFlockComponent', () => {
  let component: FoliaFlockComponent;
  let fixture: ComponentFixture<FoliaFlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoliaFlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoliaFlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
