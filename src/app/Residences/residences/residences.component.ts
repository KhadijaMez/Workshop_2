import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';
import { ResidenceService } from 'src/app/core/service/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  searchItem="";
  listResidences:Residence[]=[];


  listFavoris: Residence[] = [];
  visibilty=false;
  nameR! : string;

  constructor(private residenceService : ResidenceService){}

ngOnInit(){
  this.residenceService.getresidences().subscribe(data => {
    this.listResidences = data;
  })
}

  showAddress(residence : Residence){
    if(residence.address==="inconnu"){
      alert("adrresse inconnue")
    }else{
      this.visibilty=true;
      this.nameR=residence.name;
    }
  }

  addFavoris(r:Residence){
    console.log(this.listFavoris);
  
  if (this.listFavoris.includes(r)){
  alert('already liked')
  }
  else{this.listFavoris.push(r);
  console.log('tab', this.listFavoris);
  }
}

}
