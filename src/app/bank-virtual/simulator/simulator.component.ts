import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {
  mostrar = false;


  constructor() { }

  ngOnInit(): void {
  }


  click(evento: any){
    console.log(evento);
  }
}
