import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  usuarioDo: Persona | any;
  constructor() { }

  ngOnInit(): void {
    this.usuarioDo=new Persona("jose","miñon",25,"jose@gmail.com",5522604261);
  }

}
