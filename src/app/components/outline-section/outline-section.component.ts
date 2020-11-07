import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-outline-section',
    templateUrl: './outline-section.component.html',
    styleUrls: ['./outline-section.component.css']
})
export class OutlineSectionComponent implements OnInit {
    @Input() label: string;
    @Input() selected = false;
    @Output() clickEvent = new EventEmitter<OutlineSectionComponent>();

    constructor() { }

    ngOnInit() {
    }

    click() {
        const targetHeight = document.getElementById(this.label).offsetTop - 75;
        let currentSpeed = Math.abs(window.scrollY - targetHeight) / window.innerHeight * 10;
        const smoothScroll = (h) => {
            if (h !== targetHeight) {
                setTimeout(() => {
                    let scrollHeight;
                    if (targetHeight > h) {
                        scrollHeight = Math.min(targetHeight, h + currentSpeed);
                    } else {
                        scrollHeight = Math.max(targetHeight, h - currentSpeed);
                    }
                    window.scrollTo(0, scrollHeight);
                    currentSpeed = currentSpeed * 1.15;
                    smoothScroll(scrollHeight);
                }, 10);
            }
        };
        smoothScroll(window.scrollY);
        this.clickEvent.emit();
    }
}
