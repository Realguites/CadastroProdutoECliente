import ClientRepository from '../repositories/ClientRepository';

export default class DeleteClientService {
  private repository: ClientRepository;
  private clientCode: number;

  constructor(repository: ClientRepository, clientCode: number) {
    this.repository = repository;
    this.clientCode = clientCode;
  }

  public execute() {
    const client = this.repository.findByCode(this.clientCode);
    if (client) {
      this.repository.delete(client);
    } else {
      throw Error('Cliente não cadastrado');
    }
  }
}
