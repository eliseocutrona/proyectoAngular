import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

const controlNames = new Map<string, string>([
  ['name', 'nombre'],
  ['surname', 'apellido'],
  ['correo', 'correo'],
  ['contrasena', 'contrasena'],
  ['birthDate', 'fecha de nacimiento'],
  ['phone', 'teléfono'],
  ['city', 'ciudad'],
  ['career', 'carrera'],
  ['admissionDate', 'fecha de admisión'],
]);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() public hasAccount = true;
  @Output() public loggingIn = new EventEmitter();

  private regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';

  formularioLogin: FormGroup;

  private signupForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(this.regexCorreo),
    ]),
    surname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
  });

  constructor() {
    let controles: any = {
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern(this.regexCorreo),
      ]),
      contrasena: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      recordarCredenciales: new FormControl(true),
    };
    this.formularioLogin = new FormGroup(controles);
  }

  public get form(): FormGroup {
    return this.hasAccount ? this.formularioLogin : this.signupForm;
  }

  private _submitted = false;

  public get submitted(): boolean {
    return this._submitted;
  }

  public changeLoginMode() {
    this._submitted = false;
    this.hasAccount = !this.hasAccount;
  }

  public getErrorMessages() {
    return getErrorMessages(this.form);
  }

  public isValidInput(controlName: string): boolean {
    return isValidInput(this.form, controlName, this.submitted);
  }

  login() {
    if (this.formularioLogin.controls['correo'].errors?.['pattern']) {
      console.log('Hubo un error en el formato del correo');
    }

    if (this.formularioLogin.controls['correo'].errors?.['required']) {
      console.log('El correo es obligatorio');
    }

    this._submitted = true;
    if (this.formularioLogin.invalid) return;
    this.loggingIn.emit();

    console.log(this.formularioLogin);
  }
}

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

export const isValidInput = (
  formGroup: FormGroup,
  controlName: string,
  submitted: boolean
): boolean => {
  const control = formGroup.get(controlName);
  return !(submitted && !!control?.errors);
};
