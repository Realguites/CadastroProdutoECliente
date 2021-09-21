import Client from '../models/Client';

export default class ClientRepository {
  private clients: Array<Client>;

  constructor() {
    this.clients = [];
  }

  public findAll(): Array<Client> {
    return this.clients;
  }

  public findByCode(code: number): Client | undefined {
    return this.clients.find(v => v.code === code);
  }

  public save({
    name,
    phone,
    email,
    age,
    code,
  }: Client): Client {
    const client = new Client({
      name,
      phone,
      email,
      age,
      code,
    });
    this.clients.push(client);
    return client;
  }

  public change(clientOld: Client, clientNew: Client){
    this.clients.splice(this.clients.indexOf(clientOld), 1); //remove o elemento
    this.clients.push(clientNew);//insere novamente
    return clientNew;
  }

  public delete(client: Client){
    this.clients.splice(this.clients.indexOf(client), 1); //remove o elemento
  }
}
