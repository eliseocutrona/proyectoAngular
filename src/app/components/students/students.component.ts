import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() estudiantesHijo!: Estudiante[];
  @Output() eventoSalidaEstudiante: EventEmitter<Estudiante> =
    new EventEmitter<Estudiante>();
  nombre!: string;
  curso!: string;
  activo!: boolean;
  notaMedia!: number;

  agregarEstudiante() {
    let estudiante: Estudiante = {
      nombre: this.nombre,
      curso: this.curso,
      activo: this.activo,
      notaMedia: this.notaMedia,
    };
    console.log('Estoy agregando un estudiante', estudiante);

    this.eventoSalidaEstudiante.emit(estudiante);
  }

  actualizarNombre() {
    console.log(this.nombre);
  }
}
