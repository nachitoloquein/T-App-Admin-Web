import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTeComponent } from './agregar-te.component';

describe('AgrearTeComponent', () => {
  let component: AgregarTeComponent;
  let fixture: ComponentFixture<AgregarTeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
