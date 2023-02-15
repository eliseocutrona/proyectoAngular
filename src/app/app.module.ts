import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { LoginAdministradorComponent } from './components/login-administrador/login-administrador.component';
import { LoginEstudianteComponent } from './components/login-estudiante/login-estudiante.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { EditarCursoDialogComponent } from './components/editar-curso-dialog/editar-curso-dialog.component';

import { MaterialModule } from './material.module';
import { StudentsComponent } from './components/students/students.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarCursoDialogComponent,
    LoginComponent,
    NavbarComponent,
    LoginAdministradorComponent,
    LoginEstudianteComponent,
    ToolbarComponent,
    StudentsComponent,
    ToastComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
})
export class AppModule {}
