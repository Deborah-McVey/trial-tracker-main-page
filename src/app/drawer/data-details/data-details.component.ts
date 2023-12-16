import { Component, Input } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { DrawerService } from '../drawer.service';

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.css']
})
export class DataDetailsComponent {
  @Input() data: Data;
  /* data: Data; */
  idx: number;

constructor(
    private drawerService: DrawerService,
    private route: ActivatedRoute,
    private router: Router
) {}

onEditData() {
  this.router.navigate(['../', this.idx, 'edit'], { relativeTo: this.route });
}

ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    this.idx = +params['id'];
    this.data = this.drawerService.getData(this.idx);
    });
}
}
