import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bike } from '../list-bikes/bikeInterface';

@Component({
  selector: 'app-bike-selected',
  templateUrl: './bike-selected.component.html',
  styleUrls: ['./bike-selected.component.css']
})



export class BikeSelectedComponent {
  
  @Input() selectedBikes:Bike[];
  @Input() bikeInfo:string[]
  
  @Output() newSelectedBikes = new EventEmitter<Bike[]>();
  
  deleteBike(bike:Bike){
    console.log(bike);    
    this.selectedBikes = this.selectedBikes.filter(e => e.model !== bike.model)
    this.newSelectedBikes.emit(this.selectedBikes)
  }

 



}
