import { uuid } from 'uuidv4';

export default class Client {
  id: string;

  name: String;

  phone: string;

  email: string;

  age: number;

  code: number;

  constructor({
    name, phone, email, age, code
  }: Omit<Client, 'id'>) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.age = age;
    this.code = code;
    this.id = uuid();
  }
}
