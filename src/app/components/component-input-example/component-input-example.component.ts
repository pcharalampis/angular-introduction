import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
    selector: 'app-component-input-example',
    standalone: true,
    templateUrl: './component-input-example.component.html',
    styleUrl: './component-input-example.component.css',
    imports: [PersonTableComponent]
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Charalampis',
    surName: 'Panagiotis',
    age: 1,
    email: 'p.charalampis1@gmail.com',
    address: 'Athens'
  }
  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 37,
    email: 'johndoe@gmail.com',
    address: 'Amsterdam'
  }
}
