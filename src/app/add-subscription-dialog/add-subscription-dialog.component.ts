import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Data } from '../shared/data/data.model';

@Component({
  selector: 'app-add-subscription-dialog',
  templateUrl: './add-subscription-dialog.component.html',
  styleUrls: ['./add-subscription-dialog.component.css'],
})
export class AddSubscriptionDialogComponent implements OnInit {
  formInstance: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formInstance = this.fb.group({
      company: [''],
      date: [''],
      type: [''],
      price: [''],
    });
  }

  ngOnInit(): void {}

  save(): void {
    console.log(this.formInstance.value);
  }
}
