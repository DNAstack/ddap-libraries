import { Component, Input } from '@angular/core';

@Component({
    selector: 'ddaplib-cover-message',
    templateUrl: './cover-message.component.html',
    styleUrls: ['./cover-message.component.scss']
})
export class CoverMessageComponent {

    @Input() icon: string;
    @Input() message: string;

    constructor(
    ) {
    }

}
