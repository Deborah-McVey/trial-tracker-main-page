export class Data {
  company: string;
  date: string;
  type: string;
  price: string;

  constructor(company: string = '', date: string = '', type: string = '', price: string = '') {
    this.company = company;
    this.date = date;
    this.type = type;
    this.price = price;
 }
}
