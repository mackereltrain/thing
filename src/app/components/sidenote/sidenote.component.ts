import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SidenoteDialogComponent } from '../dialogs/sidenote-dialog/sidenote-dialog.component';


@Component({
    selector: 'app-sidenote',
    templateUrl: './sidenote.component.html',
    styleUrls: ['./sidenote.component.css']
})
export class SidenoteComponent implements OnInit {
    @Input() text: string;
    @Input() title: string;
    @Input() body: string;
    @Input() image: string = null;
    @Input() info = true;

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    openDialog() {
        this.dialog.open(SidenoteDialogComponent, {
            data: { title: this.title, body: this.body, image: this.image },
        });
    }

}
