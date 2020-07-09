import {Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ddaplib-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent {

  @Input()
  photoUri: string;

  readonly hidePreview = new FormControl(false);

}
