import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { NewListComponent } from './components/new-list/new-list.component';
// Custom imports
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewTaskComponent,
    NewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Custom imports
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
