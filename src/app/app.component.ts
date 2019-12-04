import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-app';

  list_resto = [
    {
      name:"Restaurant maBella",
      adresse:"9 Avenue du fastFood",
      logo:"lien_du_logo",
      duree_livraison:"1h",
    },
    {
      name:"Restaurant du Sud",
      adresse:"139 Rue du commerce",
      logo:"lien_du_logo",
      duree_livraison:"3h",
    },
    {
      name:"Viva restaurant",
      adresse:"28 Rue de la bienvenue",
      logo:"lien_du_logo",
      duree_livraison:"1h"
    }
  ]

}
