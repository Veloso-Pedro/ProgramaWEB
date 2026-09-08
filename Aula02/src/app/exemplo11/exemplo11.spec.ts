import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo11 } from './exemplo11';

describe('Exemplo11', () => {
  let component: Exemplo11;
  let fixture: ComponentFixture<Exemplo11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemplo11],
    }).compileComponents();

    fixture = TestBed.createComponent(Exemplo11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
