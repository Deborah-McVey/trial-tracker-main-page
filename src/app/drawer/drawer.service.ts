import { EventEmitter, Injectable } from "@angular/core";
import { Data } from "../shared/data/data.model";

@Injectable({
  providedIn: "root"
})
export class DrawerService {
  dataSelected = new EventEmitter<Data>();
  dataTableChanged = new EventEmitter<Data[]>();

  private myData: Data[] = [
    new Data('Netflix', '12/31/2023', 'monthly', '$12.99'),
    new Data('Hulu', '12/31/2023', 'monthly', '$7.99'),
    new Data('Disney', '12/31/2023', 'yearly', '$60.00'),
    new Data('Amazon Prime', '12/31/2023', 'monthly', '$11.99'),
    new Data('HBO', '12/31/2023', 'monthly', '$22.99'),
    new Data('Peacock', '12/31/2023', 'monthly', '$17.99'),
    new Data('Paramount', '12/31/2023', 'monthly', '$10.99'),
    new Data('Coursera', '12/31/2023', 'yearly', '$69.99'),
    new Data('Udemy', '12/31/2023', 'yearly', '$99.00'),
    new Data('Barkbox', '12/31/2023', 'yearly', '$54.99')
  ];

   // Read
  getData(idx: number) {
    return this.myData.slice();
  }

  //Create
  saveData(data: Data) {
    this.myData.push(data)
    this.dataTableChanged.emit(this.myData.slice())
  }

  // Delete
  removeData(idx: number) {
    if (idx !== -1) {
      this.myData.splice(idx, 1)
      this.dataTableChanged.emit(this.myData.slice());
    }
  }
}
