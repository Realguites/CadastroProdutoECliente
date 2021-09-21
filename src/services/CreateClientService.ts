import ClientRepository from '../repositories/ClientRepository';
import Client from '../models/Client';

export default class CreateClientService {
  private repository: ClientRepository;

  constructor(repository: ClientRepository) {
    this.repository = repository;
  }

  public execute({
    name,
    phone,
    email,
    age,
    code,
  }: Client): Client {
    const client = this.repository.findByCode(code);
    if (client) {
      throw Error('Cliente já cadastrado');
    } else {
      const c = new Client({
        name,
        phone,
        email,
        age,
        code,
      });
      this.repository.save(c);
      return c;
    }
  }
}
