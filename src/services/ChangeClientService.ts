import ClientRepository from '../repositories/ClientRepository';
import Client from '../models/Client';

export default class ChangeClientService {
  private repository: ClientRepository;
  private clientCode: number;

  constructor(repository: ClientRepository, clientCode: number) {
    this.repository = repository;
    this.clientCode = clientCode;
  }

  public execute({
    name,
    phone,
    email,
    age,
    code,
  }: Client): Client {
    const clientOld = this.repository.findByCode(this.clientCode);
    if (clientOld) {
      const c = new Client({
        name,
        phone,
        email,
        age,
        code,
      });
      this.repository.change(clientOld, c);
      return c;
    } else {
      throw Error('Cliente não cadastrado');
    }
  }
}
