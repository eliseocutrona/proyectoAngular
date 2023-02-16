import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddUserFormComponent } from 'src/app/components/add-user-form/add-user-form.component';



import {Estudiante}  from 'src/app/models/estudiante';

// import * as databaseStudents from 'src/assets/data/student.JSON';

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
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  databaseStudents: any[] = [
    {
      id: '1',
      name: 'John',
      surname: 'Doe',
      email: 'JohnDoe@mail.com',
      password: 'ENCRIPTED_PASSWORD',
      admissionDate: '2020-01-01T00:00:00.000Z',
      birthDate: '1990-01-01T00:00:00.000Z',
      phone: '123456789',
      city: 'Madrid',
      averageGrade: 4.75,
      career: 'Administración',
      Curso: 'Angular',
    },
  ];

  constructor(public dialog: MatDialog) {}

  public students = jsonParser<Estudiante>(this.databaseStudents);

  public onStudentUpdate(Estudiante: Partial<Estudiante>) {
    this.students = this.students.map((s) => {
      if (s.id === Estudiante.id) return { ...s, ...Estudiante };
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
      this.students = [...this.students, result.Estudiante];
    });
  }
}
