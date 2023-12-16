import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '../shared/data/data.model';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './data-form-dialog.component.html',
  styleUrls: ['./data-form-dialog.component.css']
})

export class DataFormDialogComponent implements OnInit {
  formInstance: FormGroup;

  constructor(public dialogRef: MatDialogRef<DataFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data) {
    this.formInstance = new FormGroup({
      "company":  new FormControl('', Validators.required),
      "date": new FormControl('', Validators.required),
      "type": new FormControl('', Validators.required),
      "price": new FormControl('', Validators.required),
      "category": new FormControl('', Validators.required)
    });

    this.formInstance.setValue(data);
  }

  ngOnInit(): void {

  }

  save(): void {
    this.dialogRef.close(Object.assign(new Data(), this.formInstance.value));
  }
}
