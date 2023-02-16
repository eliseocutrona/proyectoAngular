import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { LoginAdministradorComponent } from './components/login-administrador/login-administrador.component';
import { LoginEstudianteComponent } from './components/login-estudiante/login-estudiante.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { EditarCursoDialogComponent } from './components/editar-curso-dialog/editar-curso-dialog.component';

import { MaterialModule } from './material.module';
import { StudentsComponent } from './components/students/students.component';
import { ToastComponent } from './components/toast/toast.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { FullNamePipe } from './components/pipes/pipes.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { ValidInputDirective } from './directives/valid-input/valid-input.directive';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

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
    LayoutComponent,
    MenuComponent,
    DashboardComponent,
    TableComponent,
    FullNamePipe,
    AddUserFormComponent,
    ValidInputDirective,
    ConfirmModalComponent,
    LayoutComponent,
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
  ],
})
export class AppModule {}
