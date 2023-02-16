import { Component } from '@angular/core';

interface IOption {
  name: string,
  active: boolean,
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  options: IOption[] = [
    {name: "Inicio", active: false},
    {name: "Usuarios", active: true},
    {name: "Clases", active: false},
    {name: "General", active: false},
  ]
  scrollableOptions = new Map<string,string[]>([[
    "Ajustes", [
      "Perfil",
      "Cuenta",
      "Idioma",
    ],
  ]]);
}