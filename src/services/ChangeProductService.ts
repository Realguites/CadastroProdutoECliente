import ProductRepository from '../repositories/ProductRepository';
import Product from '../models/Product';

export default class ChangeProductService {
  private repository: ProductRepository;
  private productCode: number;

  constructor(repository: ProductRepository, productCode: number) {
    this.repository = repository;
    this.productCode = productCode;
  }

  public execute({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Product): Product {
    const productOld = this.repository.findByCode(this.productCode);
    if (productOld) {
      const p = new Product({
        buyPrice,
        code,
        description,
        lovers,
        sellPrice,
        tags,
      });
      this.repository.change(productOld, p);
      return p;
    } else {
      throw Error('Produto não cadastrado');
    }
  }
}
