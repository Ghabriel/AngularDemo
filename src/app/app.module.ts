import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationModule } from './notification/notification.module';
import { RestComponent } from './rest/rest.component';
import { PostsService } from './services/posts.service';

@NgModule({
    declarations: [
        AppComponent,
        FormsComponent,
        HomeComponent,
        NavbarComponent,
        RestComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NotificationModule
    ],
    providers: [
        PostsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
