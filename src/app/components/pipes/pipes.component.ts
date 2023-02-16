import {Pipe, PipeTransform } from '@angular/core';
import User from 'src/app/models/user';



@Pipe({
  name: 'fullName'
})

export class FullNamePipe implements PipeTransform {

  transform(user: User): string {
    return `${user.name} ${user.surname}`;
  }

}
