import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ddaplib-cover-message',
    templateUrl: './cover-message.component.html',
    styleUrls: ['./cover-message.component.scss']
})
export class CoverMessageComponent {

    @Input() icon: string;
    @Input() message: string;
    @Input() buttonLabel: string;
    @Input() buttonIcon: string;
    @Input() isProgress?: boolean;
    @Output() onButtonClick: EventEmitter<any> = new EventEmitter();

    onClick(): void {
        this.onButtonClick.emit();
    }

    constructor(
    ) {
        this.isProgress = false;
    }

}
