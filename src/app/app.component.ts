import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'pCharalampis';

  person = {
    givenName: 'Charalampis',
    surName: 'Panagiotis',
    age: 1,
    email: 'p.charalampis1@gmail.com'

  }
}
