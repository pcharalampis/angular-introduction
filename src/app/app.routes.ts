import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { SingleDatatableExampleComponent } from './components/single-datatable-example/single-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';

export const routes: Routes = [

    
    {path: 'component-input-example', component: ComponentInputExampleComponent},
    {path: 'for-directive', component: ForDirectiveExampleComponent},
    {path: 'event-bind-example', component: EventBindExampleComponent},
    {path: 'single-datatable-example', component: SingleDatatableExampleComponent},
    {path: 'component-output-example', component: ComponentOutputExampleComponent},
    {path: '', component: WelcomeComponent}
];
