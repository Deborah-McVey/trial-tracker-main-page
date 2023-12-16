import { Component } from '@angular/core';
import { Data } from '../shared/data/data.model';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
  selectedData = Data;
}
