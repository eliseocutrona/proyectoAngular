import User from './user';
import { Curso } from './curso';


export interface Estudiante {
  // nombre: string;
  // curso: string;
  // activo: boolean;
  // notaMedia: number;
  // sexo: string;
  // perfil: string;

  id: string;
  name : string;
  surname: string;
  password: string;
  email: string;
  birthDate: Date;
  phone: string;
  city: string;
  Curso : string;

  admissionDate: Date;
  averageGrade: number | null;
  career: string;

}



