import { Routes } from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';
import {TasksComponent} from './tasks/tasks.component';
import {MenuComponent} from './menu/menu.component';
import {Menuv2Component} from './menuv2/menuv2.component';

export const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  {path: 'menu', component: MenuComponent},
  {path: 'menuV2', component: Menuv2Component}

];
