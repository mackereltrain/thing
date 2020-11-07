import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-sidenote-dialog',
    templateUrl: './sidenote-dialog.component.html',
    styleUrls: ['./sidenote-dialog.component.css']
})
export class SidenoteDialogComponent {
    public title: string;
    public body: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, body: string }) {
        this.title = data.title;
        this.body = data.body;
    }

}
