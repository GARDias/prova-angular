import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelVeiculoFormComponent } from './aluguel-veiculo-form.component';

describe('AluguelVeiculoFormComponent', () => {
  let component: AluguelVeiculoFormComponent;
  let fixture: ComponentFixture<AluguelVeiculoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluguelVeiculoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluguelVeiculoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
