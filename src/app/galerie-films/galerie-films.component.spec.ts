import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieFilmsComponent } from './galerie-films.component';

describe('GalerieFilmsComponent', () => {
  let component: GalerieFilmsComponent;
  let fixture: ComponentFixture<GalerieFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerieFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
