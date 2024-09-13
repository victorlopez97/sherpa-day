import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {
  mostrar = false;
  dias = [{"id": 0,"text": "30","value": "opción 1"},{"id": 1,"text": "60","value": "opción 2"},{"id": 2,"text": "90","value": "opción 3"},{"id": 3,"text": "120","value": "opción 4"},{"id": 4,"text": "Otro","value": "opción 5"}];
  opcion = [];
  diasMeses = 'dias';

      meses = [{"id": 0,"text": "3","value": "opción 1"},{"id": 1,"text": "6","value": "opción 2"},{"id": 2,"text": "9","value": "opción 3"},{"id": 3,"text": "12","value": "opción 4"},{"id": 4,"text": "Otro","value": "opción 5"}];

  constructor() { }

  ngOnInit(): void {
  }


  click(evento: any){
    console.log(evento.detail.desc);
    this.mostrar=true;
    if ( evento.detail.desc === 'Días'){
this.diasMeses= 'dias'
      // @ts-ignore
      this.opcion = this.dias;
    }else{
      this.diasMeses= 'meses'
      // @ts-ignore
      this.opcion = this.meses;
    }
   ;
  }
}
