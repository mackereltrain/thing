import { Component, OnInit, QueryList, ViewChildren, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { OutlineSectionComponent } from '../outline-section/outline-section.component';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit, AfterViewInit {
    public opened: boolean;
    private selected: string;
    @ViewChildren('outlineSection') outlineSections: QueryList<OutlineSectionComponent>;
    @Output() changedSection = new EventEmitter();


    constructor() { }

    ngOnInit() {
        window.addEventListener('scroll', this.updateSection.bind(this), true);
    }

    ngAfterViewInit() {
    }

    updateSection() {
        const sections = document.getElementsByClassName('section');
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].getBoundingClientRect().bottom > 150) {
                if (this.selected === sections[i].id) {
                    return;
                }
                this.selected = sections[i].id;
                break;
            }
        }
        this.outlineSections.forEach(outlineSection => {
            if (outlineSection.label === this.selected) {
                outlineSection.selected = true;
            } else {
                outlineSection.selected = false;
            }
        });
    }

    changeSection() {
        this.changedSection.emit();
    }
}
