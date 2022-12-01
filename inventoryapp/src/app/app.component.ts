import { Component } from '@angular/core';

@Component({
  selector: 'inventory-root',
  //! Template is the view that is rendered in the browser
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template</h1>
  // <p>Inline template is a string</p>`,

  //! Styles are the CSS styles that are applied to the template
  styleUrls: ['./app.component.scss']
  // We can create the style directly here
  // styles:[`h1{color:red;}`]
})
export class AppComponent {
  title = 'inventoryapp';
}
