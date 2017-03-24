import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturesPageComponent } from './manufactures-page.component';

describe('ManufacturesPageComponent', () => {
  let component: ManufacturesPageComponent;
  let fixture: ComponentFixture<ManufacturesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
