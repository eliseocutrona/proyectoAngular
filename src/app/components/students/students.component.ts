import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent  {
  constructor(private dialog: MatDialog) {}
  // Angular Material
  // estudiantes: Estudiante[] = [
  //   {
  //     name: 'Fernando',
  //     Curso: 'Angular',
  //     activo: true,
  //     notaMedia: 8.2,
  //     sexo: 'femenino',
  //     perfil: 'desarrollador it',
  //   },
  //   {
  //     name: 'Gabriela',
  //     Curso: 'Angular',
  //     activo: true,
  //     notaMedia: 2.2,
  //     sexo: 'masculino',
  //     perfil: 'desarrollador it',
  //   },
  // ];
  // dataSource: MatTableDataSource<Estudiante> =
  //   new MatTableDataSource<Estudiante>(this.estudiantes);

  // columnas: string[] = ['nombre', 'Curso', 'activo','notaMedia','sexo','perfil','acciones'];

  // @Input() estudiantesHijo!: Estudiante[];
  // @Output() eventoSalidaEstudiante: EventEmitter<Estudiante> =
  //   new EventEmitter<Estudiante>();
  // nombre!: string;
  // Curso!: string;
  // activo!: boolean;
  // notaMedia!: number;
  // sexo!: string;
  // perfil!: string;

  // agregarEstudiante() {
  //   let estudiante: Estudiante = {
  //     nombre: this.nombre,
  //     Curso: this.Curso,
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
