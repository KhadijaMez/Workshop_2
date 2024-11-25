import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences:Residence[]=[
    {id:1,name: "El fel",address:"Borj Cedria",
    image:"../../assets/images/R1.jpeg", status: "Disponible"},
    {id:2,name: "El yasmine",
    address:"Ezzahra",image:"../../assets/images/R2.jpeg", status:
    "Disponible" },
    {id:3,name: "El Arij",
    address:"Rades",image:"../../assets/images/R3.jpeg", status:
    "Vendu"},
    {id:4,name: "El Anber",address:"inconnu",
    image:"../../assets/images/R4.jpeg", status: "En Construction"}
    ];

  // showLocation(residence: Residence) {
  //   if (residence.address === 'inconnu') {
  //     alert("L'adresse de " + residence.name + " est inconnue.");
  //   } else {
  //     alert("L'adresse de " + residence.name + " est : " + residence.address);
  //   }
  // }

  // favorites: Residence[] = [];
  // showFavoritesList: boolean = false;
  // likeResidence(residence: Residence) {
  //   // alert(residence.name + " a été ajouté à vos favoris !");

  //     if (!this.favorites.some(fav => fav.id === residence.id)) {
  //       this.favorites.push(residence);
  //       alert(residence.name + " a été ajouté à vos favoris !");
  //     } else {
  //       alert(residence.name + " est déjà dans vos favoris.");
  //     }
    
  // }
  // // showFavorites() {
  // //   console.log('Favoris :', this.favorites);
  // // }

  // removeFavorite(residence: Residence) {
  //   this.favorites = this.favorites.filter(fav => fav.id !== residence.id);
  // }

  // toggleFavorites() {
  //   this.showFavoritesList = !this.showFavoritesList;
  // }

  // filteredResidences: Residence[] = [...this.listResidences]; // Copie initiale des données
  // searchAddress: string = '';

  // filterResidences() {
  //   if (!this.searchAddress) {
  //     this.filteredResidences = [...this.listResidences]; // Si la recherche est vide, afficher tout
  //   } else {
  //     this.filteredResidences = this.listResidences.filter(residence =>
  //       residence.address.toLowerCase().includes(this.searchAddress.toLowerCase())
  //     );
  //   }
  // }


  visibilty=false;
  nameR! : string;
  showAddress(residence : Residence){
    if(residence.address==="inconnu"){
      alert("adrresse inconnue")
    }else{
      this.visibilty=true;
      this.nameR=residence.name;
    }
  }

}
