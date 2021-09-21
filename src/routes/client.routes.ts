import { Router } from 'express';
import ClientRepository from '../repositories/ClientRepository';
import CreateClientService from '../services/CreateClientService';
import ChangeClientService from '../services/ChangeClientService';
import DeleteClientService from '../services/DeleteClientService';



const clientRouter = Router();
const clientRepository = new ClientRepository();

clientRouter.get('/', (request, response) => {
  response.json(clientRepository.findAll());
});

clientRouter.post('/', (request, response) => {
  try {
    const service = new CreateClientService(clientRepository);
    const {
      name,
      phone,
      email,
      age,
      code,
      id
    } = request.body;
    const cliente = service.execute({
      name,
      phone,
      email,
      age,
      code,
      id
    });
    response.status(201).json(cliente);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
}),

clientRouter.put('/:id', (request, response) => {
  try {
    const serviceChange = new ChangeClientService(clientRepository, Number(request.params.id));
    const {
      name,
      phone,
      email,
      age,
      code,
      id
    } = request.body;
    const cliente = serviceChange.execute({
      name,
      phone,
      email,
      age,
      code,
      id
    });
    response.status(201).json(cliente);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
}),
clientRouter.delete('/:id', (request, response) => {
  try {
    const serviceDelete = new DeleteClientService(clientRepository, Number(request.params.id));
    const cliente = serviceDelete.execute();
    response.status(204).json('Cliente deletado');
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default clientRouter;
