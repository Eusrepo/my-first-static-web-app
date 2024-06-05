import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello from {{ value }}</div>`,
})
export class AppComponent {
  value = 'my first test Web Static App';
}
