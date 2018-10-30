import { AluguelVeiculoModule } from './aluguel-veiculo.module';

describe('AluguelVeiculoModule', () => {
  let aluguelVeiculoModule: AluguelVeiculoModule;

  beforeEach(() => {
    aluguelVeiculoModule = new AluguelVeiculoModule();
  });

  it('should create an instance', () => {
    expect(aluguelVeiculoModule).toBeTruthy();
  });
});
