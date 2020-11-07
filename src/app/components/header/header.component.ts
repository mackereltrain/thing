import { Component, OnInit, ViewChild } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @ViewChild('sideMenu', null) sideMenu: SideMenuComponent;
    private lastScroll = 0;
    public crossed = false;
    public checked = false;
    public clickable = true;

    constructor() { }

    ngOnInit() {
        window.addEventListener('scroll', this.shrinkListener.bind(this), true);
    }

    shrinkListener(e) {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        this.lastScroll = st;
    }

    toggleSidebar() {
        if (this.clickable) {
            this.clickable = false;
            if (this.crossed) {
                this.crossed = false;
                setTimeout(() => {
                    this.checked = false;
                    this.clickable = true;
                }, 200);
            } else {
                this.checked = true;
                setTimeout(() => {
                    this.crossed = true;
                    this.clickable = true;
                }, 200);
            }
            this.sideMenu.opened = !this.sideMenu.opened;
        }
    }

    changedSection() {
        if (window.innerWidth / 2 + 412 > window.innerWidth - 400) {
            this.toggleSidebar();
        }
    }
}
