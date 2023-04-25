import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-entry-dialog',
  templateUrl: './add-entry-dialog.component.html',
  styleUrls: ['./add-entry-dialog.component.scss'],
})
export class AddEntryDialogComponent {
  onSubmit = (form: NgForm) => {
    console.log(form.value);
    // this.addEntry(form.value);
  };
}
