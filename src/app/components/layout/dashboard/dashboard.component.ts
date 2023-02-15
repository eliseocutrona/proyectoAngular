import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddUserFormComponent } from './add-user-form/add-user-form.component';

import { Estudiante } from 'src/app/models/estudiante';



export const generateId = (function () {
  let id = 6;
  return function () {
    return (++id).toString();
  };
})();

//avoids typescript conversion errors
export function jsonParser<T>(objects: Array<any>): T[] {
  return JSON.parse(JSON.stringify(objects)).default;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public dialog: MatDialog) {}


 


 databaseStudents!: [
    {
      "id": "1";
      "name": "John";
      "surname": "Doe";
      "email": "JohnDoe@mail.com";
      "password": "ENCRIPTED_PASSWORD";
      "admissionDate": "2020-01-01T00:00:00.000Z";
      "birthDate": "1990-01-01T00:00:00.000Z";
      "phone": "123456789";
      "city": "Madrid";
      "averageGrade": 4.75;
      "career": "Administración";
    },
    {
      "id": "2";
      "name": "Jane";
      "surname": "Doe";
      "email": "JaneDoe@mail.com";
      "password": "ENCRIPTED_PASSWORD";
      "admissionDate": "2020-05-01T00:00:00.000Z";
      "phone": "123456789";
      "city": "Montevideo";
      "birthDate": "1990-01-01T00:00:00.000Z";
      "averageGrade": 10;
      "career": "Diseño Gráfico";
    },
    {
      "id": "3";
      "name": "Jake";
      "surname": "Brown";
      "email": "JakeBrown@mail.com";
      "password": "ENCRYPTED_PASSWORD";
      "admissionDate": "2000-07-05T00:00:00.000Z";
      "phone": "123456789";
      "city": "Buenos Aires";
      "birthDate": "1990-01-01T00:00:00.000Z";
      "averageGrade": 1.5;
      "career": "Desarrollo Web";
    },
    {
      "id": "4";
      "name": "Bruno";
      "surname": "Mars";
      "email": "BrunoMars@mail.com";
      "password": "ENCRYPTED_PASSWORD";
      "admissionDate": "2010-01-01T00:00:00.000Z";
      "phone": "123456789";
      "city": "Sidney";
      "birthDate": "1990-01-01T00:00:00.000Z";
      "averageGrade": 5.5;
      "career": "Desarrollo Web";
    },
    {
      "id": "5";
      "name": "Rafael";
      "surname": "Nadal Jr.";
      "email": "RafaNadal@mail.com";
      "password": "ENCRYPTED_PASSWORD";
      "admissionDate": "2015-01-01T00:00:00.000Z";
      "birthDate": "1990-01-01T00:00:00.000Z";
      "phone": "123456789";
      "city": "Barcelona";
      "averageGrade": 9;
      "career": "Ciencia de Datos";
    },
    {
      "id": "6";
      "name": "Mery";
      "surname": "Jane";
      "email": "MeryJane@mail.com";
      "password": "ENCRYPTED_PASSWORD";
      "admissionDate": "2010-01-01T00:00:00.000Z";
      "birthDate": "1990-01-01T00:00:00.000Z";
      "phone": "123456789";
      "city": "Barcelona";
      "averageGrade": 8.8;
      "career": "Ciberseguridad";
    }
  ];
  public students = jsonParser<Estudiante>(this.databaseStudents);

  public onStudentUpdate(student: Partial<Estudiante>) {
    this.students = this.students.map((s) => {
      if (s. === student.id) return { ...s, ...student };
      return s;
    });
  }

  public onStudentDelete(id: Estudiante['id']) {
    this.students = this.students.filter((s) => s.id !== id);
  }

  public openAddStudentDialog() {
    const dialogRef = this.dialog.open(AddUserFormComponent, {
      width: '600px',
      data: {
        student: null,
        valid: true,
        title: 'Agregar usuario',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      this.students = [...this.students, result.student];
    });
  }
}
