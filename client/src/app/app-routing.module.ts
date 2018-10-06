import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AddComponent } from './components/books/add/add.component';
import { ListComponent } from './components/books/list/list.component';
import { EditComponent } from './components/books/edit/edit.component';

const routes: Routes = [
  {
    path: '/book',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: ListComponent,      
      },
      {
        path: 'add',
        component: AddComponent,
      },  
      {
        path: ':id/edit',
        component: EditComponent,
      },
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
