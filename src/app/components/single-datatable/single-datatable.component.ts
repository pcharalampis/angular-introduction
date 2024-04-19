import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-single-datatable',
  standalone: true,
  imports: [],
  templateUrl: './single-datatable.component.html',
  styleUrl: './single-datatable.component.css'
})
export class SingleDatatableComponent {
  @Input() data: Person[];
  @Output() personClicked = new EventEmitter<Person>();

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none'
  }

  sortData(sortKey: string) {
    if (this.sortOrder[sortKey] == 'asc') {
      this.sortOrder[sortKey] = 'dsc';
      this.data = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.data = sortBy(this.data, sortKey);
    }

    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        this.sortOrder[key] = 'none';
      }
    }
  }

  sortSign(sortKey: string) {
    if (this.sortOrder[sortKey] === 'asc') {
      return '\u2191';
    } else if (this.sortOrder[sortKey] === 'dsc') {
      return '\u2193';
    } else {
      return '';
    }
  }

  onPersonClicked(person: Person) {
    this.personClicked.emit(person);
  }
}
