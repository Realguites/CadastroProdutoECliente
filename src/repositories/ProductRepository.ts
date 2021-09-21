import Product from '../models/Product';

export default class ProductRepository {
  private products: Array<Product>;

  constructor() {
    this.products = [];
  }

  public findAll(): Array<Product> {
    return this.products;
  }

  public findByCode(code: number): Product | undefined {
    return this.products.find(v => v.code === code);
  }

  public save({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Product): Product {
    const product = new Product({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
    });
    this.products.push(product);
    return product;
  }

  public change(productOld: Product, productNew: Product){
    this.products.splice(this.products.indexOf(productOld), 1); //remove o elemento
    this.products.push(productNew);//insere novamente
    return productNew;
  }

  public delete(product: Product){
    this.products.splice(this.products.indexOf(product), 1); //remove o elemento
  }
}
