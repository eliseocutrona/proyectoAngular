import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent  {
  constructor(private dialog: MatDialog) {}
  // Angular Material
  estudiantes: Estudiante[] = [
    {
      nombre: 'Fernando',
      curso: 'Angular',
      activo: true,
      notaMedia: 8.2,
      sexo: 'femenino',
      perfil: 'desarrollador it',
    },
    {
      nombre: 'Gabriela',
      curso: 'Angular',
      activo: true,
      notaMedia: 2.2,
      sexo: 'masculino',
      perfil: 'desarrollador it',
    },
  ];
  dataSource: MatTableDataSource<Estudiante> =
    new MatTableDataSource<Estudiante>(this.estudiantes);

  columnas: string[] = ['nombre', 'curso', 'activo','notaMedia','sexo','perfil','acciones'];

  // @Input() estudiantesHijo!: Estudiante[];
  // @Output() eventoSalidaEstudiante: EventEmitter<Estudiante> =
  //   new EventEmitter<Estudiante>();
  // nombre!: string;
  // curso!: string;
  // activo!: boolean;
  // notaMedia!: number;
  // sexo!: string;
  // perfil!: string;

  // agregarEstudiante() {
  //   let estudiante: Estudiante = {
  //     nombre: this.nombre,
  //     curso: this.curso,
  //     activo: this.activo,
  //     notaMedia: this.notaMedia,
  //     sexo: this.sexo,
  //     perfil: this.perfil,
  //   };
  //   console.log('Estoy agregando un estudiante', estudiante);

  //   this.eventoSalidaEstudiante.emit(estudiante);
  // }

  // actualizarNombre() {
  //   console.log(this.nombre);
  // }




  // abrirModal(estudiantes: Estudiante) {
  //   const dialogRef = this.dialog.open(EditarCursoDialogComponent, {
  //     data: estudiantes,
  //   });
  // }
}
