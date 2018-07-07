import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReadPageComponent } from './read-page/read-page.component';

const route: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'read/:id', component: ReadPageComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadPageComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
