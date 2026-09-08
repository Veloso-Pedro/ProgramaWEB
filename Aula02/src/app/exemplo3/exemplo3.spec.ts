import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo3 } from './exemplo3';

describe('Exemplo3', () => {
  let component: Exemplo3;
  let fixture: ComponentFixture<Exemplo3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemplo3],
    }).compileComponents();

    fixture = TestBed.createComponent(Exemplo3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
