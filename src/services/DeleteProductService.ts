import ProductRepository from '../repositories/ProductRepository';

export default class DeleteProductService {
  private repository: ProductRepository;
  private productCode: number;

  constructor(repository: ProductRepository, productCode: number) {
    this.repository = repository;
    this.productCode = productCode;
  }

  public execute() {
    const product = this.repository.findByCode(this.productCode);
    if (product) {
      this.repository.delete(product);
    } else {
      throw Error('Produto não cadastrado');
    }
  }
}
