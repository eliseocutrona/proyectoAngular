import { Component, OnInit , Inject } from '@angular/core';
import { FormGroup, FormControl, Validators , AbstractControl} from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiante } from 'src/app/models/estudiante';



export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.([^\s@]+){2,4}$/;
export const INPUTS_MAX_LENGTH = 30;
export const PASSWORD_MIN_LENGTH = 6;
export const SIMPLE_INPUTS_MIN_LENGTH = 2;

//Validations
export const SIMPLE_VALIDATIONS = [
    Validators.required,
    Validators.minLength(SIMPLE_INPUTS_MIN_LENGTH),
    Validators.maxLength(INPUTS_MAX_LENGTH),
]

export const EMAIL_VALIDATIONS = [
    ...SIMPLE_VALIDATIONS,
    Validators.pattern(EMAIL_REGEX),
]

export const PASSWORD_VALIDATIONS = [
    ...SIMPLE_VALIDATIONS,
    Validators.minLength(PASSWORD_MIN_LENGTH),
]


const controlNames = new Map<string, string>([
  ['name', 'nombre'],
  ['surname', 'apellido'],
  ['email', 'email'],
  ['password', 'contraseña'],
  ['birthDate', 'fecha de nacimiento'],
  ['phone', 'teléfono'],
  ['city', 'ciudad'],
  ['career', 'carrera'],
  ['admissionDate', 'fecha de admisión'],
]);

const getControlErrorMessages = (
  control: AbstractControl<any, any>,
  controlName: string
): string[] => {
  const messages = [];

  if (control.hasError('required'))
    messages.push(`El campo "${controlNames.get(controlName)}" es obligatorio`);
  if (control.hasError('minlength'))
    messages.push(
      `El largo mínimo de "${controlNames.get(controlName)}" es ${
        control.errors?.['minlength'].requiredLength
      }`
    );
  if (control.hasError('maxlength'))
    messages.push(
      `El largo máximo de "${controlNames.get(controlName)}" es ${
        control.errors?.['maxlength'].requiredLength
      }`
    );
  if (control.hasError('pattern'))
    messages.push(
      `El formato de "${controlNames.get(controlName)}" es inválido`
    );

  return messages;
};

export const getErrorMessages = (formGroup: FormGroup): string[] => {
  const messages = [];

  for (const controlName in formGroup.controls) {
    if (formGroup.controls.hasOwnProperty(controlName)) {
      const control = formGroup.get(controlName);
      if (control?.invalid) {
        messages.push(...getControlErrorMessages(control, controlName));
      }
    }
  }

  return messages;
};

export const isValidInput = (
  formGroup: FormGroup,
  controlName: string,
  submitted: boolean
): boolean => {
  const control = formGroup.get(controlName);
  return !(submitted && !!control?.errors);
};

export const generateId = (function () {
  let id = 6;
  return function () {
    return (++id).toString();
  }
})();

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string;
      student: Estudiante | null;
      valid: boolean;
    }, private dialogRef: MatDialogRef<AddUserFormComponent>
  ) { }

  private defaultStudentData: Estudiante = this.data.student ?? {} as Estudiante;


  public formGroup = new FormGroup({
    name: new FormControl(this.defaultStudentData.name, SIMPLE_VALIDATIONS),
    surname: new FormControl(this.defaultStudentData.surname, SIMPLE_VALIDATIONS),
    email: new FormControl(this.defaultStudentData.email, EMAIL_VALIDATIONS),
    password: new FormControl(this.defaultStudentData.password, PASSWORD_VALIDATIONS),
    birthDate: new FormControl(this.defaultStudentData.birthDate, SIMPLE_VALIDATIONS),
    admissionDate: new FormControl(this.defaultStudentData.admissionDate, SIMPLE_VALIDATIONS),
    phone: new FormControl(this.defaultStudentData.phone, SIMPLE_VALIDATIONS),
    city: new FormControl(this.defaultStudentData.city, SIMPLE_VALIDATIONS),
    career: new FormControl(this.defaultStudentData.career, SIMPLE_VALIDATIONS),
    Curso: new FormControl(this.defaultStudentData.Curso, SIMPLE_VALIDATIONS),
  //  activo: new FormControl(this.defaultStudentData.activo),


  });

  public submitted = false;

  public onSubmit() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      this.data.valid = false;
      return;
    }

    const inputNames = Object.keys(this.formGroup.controls);
    for (const control in inputNames) {
      if (this.formGroup.get(control)?.invalid) {
        this.data.valid = false;
        return;
      }
    };

    const formValues = this.formGroup.value;

    const student: Estudiante = {
      id: this.data.student?.id ?? generateId(),
      
      name: formValues.name ?? '',
      surname: formValues.surname ?? '',
      email: formValues.email ?? '',
      password: formValues.password ?? '',
      // activo: formValues.activo ?? '',
      birthDate: formValues.birthDate ?? new Date(),
      admissionDate: formValues.admissionDate ?? new Date(),
      phone: formValues.phone ?? '',
      city: formValues.city ?? '',
      career: formValues.career ?? '',
      averageGrade: this.data.student?.averageGrade ?? null ?? 0,
       Curso : formValues.Curso ?? '' ,
    };

    this.data.student = student;
    this.data.valid = true;
    this.dialogRef.close(this.data);
  }

  public onCancel() {
    this.dialogRef.close();
  }

  public getErrorMessages = (): string[] => {
    return getErrorMessages(this.formGroup);
  }

  public isValidInput = (controlName: string) => {
    return isValidInput(this.formGroup, controlName, this.submitted);
  }

  ngOnInit(): void {
  }

}






