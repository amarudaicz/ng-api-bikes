import { Component } from '@angular/core';
import {Bike} from './bikeInterface'

@Component({
  selector: 'app-list-bikes',
  templateUrl: './list-bikes.component.html',
  styleUrls: ['./list-bikes.component.css']
})

export class ListBikesComponent {

  listMotorbikes:Bike[] = [];
  selectedBikes:Bike[] = [];
  bikeInfo:string[];
  bikeMake:string = '';
  bikeModel:string = '';

  async getData(make:string, model:string){
    let data = await fetch(`https://api.api-ninjas.com/v1/motorcycles?make=${make}&model=${model}`, {
      headers: {
        'X-Api-Key':'nq+4R1C5cuxmV6gnFS5jnw==SxbXrtG6qPlQ1wTW'
      }
    }).then(res => res.json());
    console.log(data)
    this.listMotorbikes = data
  }

  onSelectBikeOne(bike:Bike){  

    const verifyDuplicate = this.selectedBikes.some(e => e.model === bike.model && e.make === bike.make)  
    console.log(verifyDuplicate);
    console.log(this.selectedBikes);
    
    if (!verifyDuplicate || this.selectedBikes.length === 0) {
      this.selectedBikes.push(bike)
    }

   this.bikeInfo = Object.keys(this.selectedBikes[0])
   console.log(this.bikeInfo)
     
  }

  updateList(newList:Bike[]){
    this.selectedBikes = newList
  }








}
