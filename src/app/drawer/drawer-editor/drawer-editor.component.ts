import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-drawer-editor',
  templateUrl: './drawer-editor.component.html',
  styleUrls: ['./drawer-editor.component.css']
})
export class DrawerEditorComponent implements OnInit {
  idx: number;
  isEditMode = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params["id"];
      this.isEditMode = params["id"] != null;
      console.log("%c  isEditMode: ", "color: red;", this.isEditMode);
    });
  }
}
