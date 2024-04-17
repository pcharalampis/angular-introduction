import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: 'Charalampis',
    surName: 'Panagiotis',
    age: 1,
    email: 'p.charalampis1@gmail.com'

  }
}
