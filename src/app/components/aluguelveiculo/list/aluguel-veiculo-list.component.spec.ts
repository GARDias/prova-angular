import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelVeiculoListComponent } from './aluguel-veiculo-list.component';

describe('AluguelVeiculoListComponent', () => {
  let component: AluguelVeiculoListComponent;
  let fixture: ComponentFixture<AluguelVeiculoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluguelVeiculoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluguelVeiculoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
