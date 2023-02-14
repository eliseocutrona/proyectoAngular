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
export class StudentsComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {}

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

  columnas: string[] = ['nombre', 'curso', 'profesor', 'acciones'];

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

  // cursos: Curso[] = [
  //   { nombre: 'Angular', comision: '49533', profesor: 'Abner' },
  //   { nombre: 'Vue', comision: '42523', profesor: 'Lucas' },
  //   { nombre: 'NodeJS', comision: '42433', profesor: 'Tristan' },
  //   { nombre: 'React', comision: '49536', profesor: 'Freddy' },
  // ];
  // dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(
  //   this.cursos
  // );
  // columnas: string[] = ['nombre', 'comision', 'profesor', 'acciones'];

  abrirModal(estudiantes: Estudiante) {
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, {
      data: estudiantes,
    });
  }
}
