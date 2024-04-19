import { Component } from '@angular/core';
import { SingleDatatableComponent } from '../single-datatable/single-datatable.component';
import { ManyPersons } from 'src/app/shared/interfaces/person';


@Component({
  selector: 'app-single-datatable-example',
  standalone: true,
  imports: [SingleDatatableComponent],
  templateUrl: './single-datatable-example.component.html',
  styleUrl: './single-datatable-example.component.css'
})
export class SingleDatatableExampleComponent {
  manyPersons = ManyPersons;
}
