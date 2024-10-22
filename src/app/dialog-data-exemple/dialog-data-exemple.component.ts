import {Component, inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Injecting data when opening a dialog
 */

@Component({
  selector: 'app-dialog-data-exemple',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dialog-data-exemple.component.html',
  styleUrl: './dialog-data-exemple.component.css'
})
export class DialogDataExempleComponent {
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
  }
}
  @Component({
    selector: 'dialog-data-example-dialog',
    templateUrl: 'dialog-data-example-dialog.html',
    standalone: true,
    imports: [MatDialogTitle, MatDialogContent],
  })
  export class DialogDataExampleDialog {
    data = inject(MAT_DIALOG_DATA);
  }
  
  
  /**  Copyright 2024 Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license */


