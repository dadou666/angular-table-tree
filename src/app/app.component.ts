
import { Component, OnInit } from '@angular/core';
import { TypeService, Arbre , Type , ConfigArbre, Objet } from 'dadou-tree';
import { ConfigTest } from './test.config';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 types: Type[] = [
    {
      nom: 'Type',
      abstrait: true
    },
    {
      nom: 'TypeRef',
      super: 'Type',
      abstrait: false ,
      champs: [
        {nom: 'nom' , type: 'string'}
      ]
    },
    {
      nom: 'TypeList' ,
      super: 'Type' ,
      abstrait: false ,
      champs: [
        { nom: 'type' , type: 'Type'}
      ]
    },
    {
      nom: 'TypeChaine',
      super: 'Type' ,
      abstrait: false
    },
    {
      nom: 'TypeNombre',
      super: 'Type' ,
      abstrait: false
    },
    {
      nom: 'TypeBoolean',
      super: 'Type' ,
      abstrait: false
    },
    {
      nom: 'Champ' ,
      abstrait: false ,
      champs: [
        { nom: 'nom' , type: 'string'},
        { nom: 'type' , type: 'Type'}
      ]

    },
    {
      nom: 'TypeDef' ,
      abstrait: false ,
      champs: [
        { nom: 'abstrait' , type: 'boolean'},
        { nom: 'nom' , type: 'string'},
        { nom: 'champs' , type: '*Champ'},
        { nom: 'sousTypes' , type: '*TypeDef'}
      ],
    }
  ];
  typeService: TypeService ;
  configArbre: ConfigArbre;
  objet: Objet;
  constructor( ) {
    this.typeService = new TypeService();
    this.typeService.init(this.types);
    this.configArbre = new ConfigTest();
    this.objet = this.typeService.creerObjet('TypeDef');

   }

  ngOnInit() {
  }
}
