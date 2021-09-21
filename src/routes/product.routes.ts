import { Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/CreateProductService';
import ChangeProductService from '../services/ChangeProductService';
import DeleteProductService from '../services/DeleteProductService';



const productRouter = Router();
const productRepository = new ProductRepository();

productRouter.get('/', (request, response) => {
  response.json(productRepository.findAll());
});

productRouter.post('/', (request, response) => {
  try {
    const service = new CreateProductService(productRepository);
    const {
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    } = request.body;
    const produto = service.execute({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    });
    response.status(201).json(produto);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
}),

productRouter.put('/:id', (request, response) => {
  try {
    const serviceChange = new ChangeProductService(productRepository, Number(request.params.id));
    const {
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    } = request.body;
    const produto = serviceChange.execute({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    });
    response.status(201).json(produto);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
}),
productRouter.delete('/:id', (request, response) => {
  try {
    const serviceDelete = new DeleteProductService(productRepository, Number(request.params.id));
    const produto = serviceDelete.execute();
    response.status(204).json('Produto deletado');
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default productRouter;
