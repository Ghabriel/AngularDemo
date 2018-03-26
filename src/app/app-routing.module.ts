import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'cart', component: ShoppingCartComponent },
    // {
    //     path: 'objects',
    //     children: [
    //         {
    //             path: '',
    //             component: ObjectListComponent
    //         },
    //         {
    //             path: 'add',
    //             component: ObjectCreationComponent
    //         },
    //         {
    //             path: 'remove',
    //             component: ObjectDeletionComponent
    //         }
    //     ]
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
