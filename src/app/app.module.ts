import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkoutComponent } from "./modules/workout/workout/workout.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { GeneralLayoutComponent } from "./modules/general-layout/general-layout.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderComponent,
    WorkoutComponent,
    GeneralLayoutComponent,
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
