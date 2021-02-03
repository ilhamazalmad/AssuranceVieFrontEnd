import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import {MatSelectModule} from '@angular/material/select';
import { AjoutAssuranceVieComponent } from './ajout-assurance-vie/ajout-assurance-vie.component';
import { AfficheAssuranceVieComponent } from './affiche-assurance-vie/affiche-assurance-vie.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfilComponent,
    AjoutAssuranceVieComponent,
    AfficheAssuranceVieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    AngularFileUploaderModule,
    ReactiveFormsModule,
    MatSelectModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
