import { Routes } from '@angular/router';
import { HomeComponent } from './components/homeExpense/home.component';
import { DetailsComponent } from './components/detailsExpense/details.component';
import { DeleteComponent } from './components/deleteExpense/delete.component';
import { EditComponent } from './components/editExpense/edit.component';
import { CreateComponent } from './components/createExpense/create.component';
import { HomeEpxenseTypeComponent } from './components/home-epxense-type/home-epxense-type.component';
import { DetailsEpxenseTypeComponent } from './components/details-epxense-type/details-epxense-type.component';
import { DeleteEpxenseTypeComponent } from './components/delete-epxense-type/delete-epxense-type.component';
import { EditEpxenseTypeComponent } from './components/edit-epxense-type/edit-epxense-type.component';
import { CreateEpxenseTypeComponent } from './components/create-epxense-type/create-epxense-type.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'createExpense',
    component: CreateComponent,
  },
  {
    path: 'editExpense/:id',
    component: EditComponent,
  },
  {
    path: 'detailsExpense/:id',
    component: DetailsComponent,
  },
  {
    path: 'deleteExpense/:id',
    component: DeleteComponent,
  },
  {
    path: 'homeExpenseType',
    component: HomeEpxenseTypeComponent,
  },
  {
    path: 'createExpenseType',
    component: CreateEpxenseTypeComponent,
  },
  {
    path: 'editExpenseType/:id',
    component: EditEpxenseTypeComponent,
  },
  {
    path: 'detailsExpenseType/:id',
    component: DetailsEpxenseTypeComponent,
  },
  {
    path: 'deleteExpenseType/:id',
    component: DeleteEpxenseTypeComponent,
  },
];
