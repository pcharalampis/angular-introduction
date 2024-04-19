import { Component } from '@angular/core';
import { ManyPersons, Person } from 'src/app/shared/interfaces/person';
import { SingleDatatableComponent } from '../single-datatable/single-datatable.component';

@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SingleDatatableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
  manyPersons = ManyPersons;

  onPersonClicked(person: Person) {
    alert(this.personTemplate(person));
  }

  personTemplate(person: Person) {
    return `
    --- Person Details ---
    First Name : ${person.givenName}
    Last Name : ${person.surName}
    Age : ${person.age}
    Email : ${person.email}
    Education : ${person.education}
    `
  }
}
