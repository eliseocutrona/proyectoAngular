import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';
import { AddUserFormComponent } from '../add-user-form/add-user-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() public students!: Estudiante[];
  @Output() public onStudentUpdate = new EventEmitter<Partial<Estudiante>>();
  @Output() public onStudentDelete = new EventEmitter<Estudiante['id']>();


  constructor(public dialog: MatDialog, public el: ElementRef) {}

  public displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'career',
    'admissionDate',
    'averageGrade',
    'actions',
  ];
  public dataSource!: MatTableDataSource<Estudiante>;

  ngOnInit(): void {}

 


 

  public compare(
    a: number | string | Date | null,
    b: number | string | Date | null,
    isAsc: boolean
  ) {
    if (a === null || b === null) return 0;
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  public onSortData(event: { active: string; direction: string }) {
    const sort = event.active;
    const direction = event.direction;
    this.dataSource.data = this.students.sort((a, b) => {
      const isAsc = direction === 'asc';
      switch (sort) {
        case 'id':
          return this.compare(a.id, b.id, isAsc);
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'email':
          return this.compare(a.email, b.email, isAsc);
        case 'career':
          return this.compare(a.career, b.career, isAsc);
        case 'admissionDate':
          return this.compare(a.admissionDate, b.admissionDate, isAsc);
        case 'averageGrade':
          return this.compare(a.averageGrade, b.averageGrade, isAsc);
        default:
          return 0;
      }
    });
  }

  public onEditStudent(studentId: Estudiante['id']) {
    const student = this.students.find((student) => student.id === studentId);

    const dialogRef = this.dialog.open(AddUserFormComponent, {
      width: '750px',
      data: { student: student, valid: true, title: 'Modificar usuario' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result || !result.valid) return;
      this.onStudentUpdate.emit(result.student);
    });
  }
  public onDeleteStudent(studentId: Estudiante['id']) {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '400px',
      data: {
        title: 'Eliminar estudiante',
        message:
          '¿Estás seguro de que quieres eliminar a este estudiante? Los datos perdidos no podrán recuperarse.',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        onConfirm: () => {
          this.onStudentDelete.emit(studentId);
          this.dialog.closeAll();
        },
        onCancel: () => {
          this.dialog.closeAll();
        },
      },
    });
  }
}
