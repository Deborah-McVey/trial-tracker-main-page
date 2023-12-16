  import { Injectable } from '@angular/core';
  import { BehaviorSubject } from 'rxjs';
  import { staticData } from './static-data';
  import { Data } from './data.model';

  @Injectable({
    providedIn: 'root'
  })
  export class DataService {

    data$: BehaviorSubject<Data[]>;
    data: Array<Data> = [];

    constructor() {
      this.data$ = new BehaviorSubject([]);
      this.data = staticData;
    }

    getAll() {
      this.data$.next(this.data);
    }

    add(data: Data) {
      this.data.push(data);
      let findElem = this.data.find(p => p.company == data.company);

      findElem.company = data.company;
      findElem.date = data.date;
      findElem.type = data.type;
      findElem.price = data.price;
      findElem.category = data.category;

      this.data$.next(this.data);
    }

    edit(data: Data) {
      let findElem = this.data.find(p => p.company == data.company);

      findElem.company = data.company;
      findElem.date = data.date;
      findElem.type = data.type;
      findElem.price = data.price;

      this.data$.next(this.data);
    }

    remove(company: string) {
      this.data = this.data.filter(p => {
        return p.company != company
      });

      this.data$.next(this.data);
    }
 }
