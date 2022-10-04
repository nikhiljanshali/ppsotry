/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcadamicsComponent } from './acadamics.component';

describe('AcadamicsComponent', () => {
  let component: AcadamicsComponent;
  let fixture: ComponentFixture<AcadamicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcadamicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
