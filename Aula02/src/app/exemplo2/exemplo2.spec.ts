import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo2 } from './exemplo2';

describe('Exemplo2', () => {
  let component: Exemplo2;
  let fixture: ComponentFixture<Exemplo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemplo2],
    }).compileComponents();

    fixture = TestBed.createComponent(Exemplo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
