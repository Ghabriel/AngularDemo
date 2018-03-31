import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { RestComponent } from './rest/rest.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'rest', component: RestComponent },
    { path: 'forms', component: FormsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
