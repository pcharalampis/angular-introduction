import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'src/app/shared/interfaces/menu-item';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
  menu: MenuItem[] = [
    {text: 'Component Input [example]', routerLink: 'component-input-example'},
    {text: 'For [example]', routerLink: 'for-directive'},
    {text: 'Event Binding [example]', routerLink: 'event-bind-example'},
    {text: 'Data Table [example]', routerLink: 'single-datatable-example'}
  ];
}
