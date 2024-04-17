import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'pCharalampis';

  person0 = {
    givenName: 'Charalampis',
    surName: 'Panagiotis',
    age: 1,
    email: 'p.charalampis1@gmail.com',
    address: 'Athens'
  }
  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 37,
    email: 'johndoe@gmail.com',
    address: 'Amsterdam'
  }
  
}
