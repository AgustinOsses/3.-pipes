import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Agustin';
  nombre2 ='claUdio agunStIn osses';
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  video: 'watch?v=UuTT3rOm3Vc';
  activar:boolean=true;
  hereo = {
    nombre:"Logan",
    clave:"Wolverine",
    edad: 500,
    direccion:{
      calle:"Primera",
      casa:"19"
    }
  }

  valorDePromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('llego la data'),3500)

  });

  fecha = new Date();
}
