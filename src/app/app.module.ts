import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkoutComponent } from "./modules/workout/workout/workout.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './shared/header/header.component';
import { GeneralLayoutComponent } from "./modules/general-layout/general-layout.component";
import { GeneralLayoutModule } from './modules/general-layout/general-layout.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    HeaderComponent,
    MenubarModule,
    WorkoutComponent,
    GeneralLayoutComponent,
    GeneralLayoutModule,
    MatButtonModule
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
