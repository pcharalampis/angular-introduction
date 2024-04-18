import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink, RouterOutlet,
    PersonTableComponent, EventBindExampleComponent
    
  ],
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
