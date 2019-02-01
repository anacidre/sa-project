import { Component } from '@angular/core';
import * as saButton from '../webcomponents/sa-button/sa-button.js';


@Component({
  selector: 'sa-root',
  template: `
  <sa-button text="hi"></sa-button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sa-project';
}
