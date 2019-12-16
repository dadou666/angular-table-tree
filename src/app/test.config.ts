import { ConfigArbre , Arbre , Objet , Tableau , TypeService ,ValeurString , Chemin } from 'dadou-tree';


export class ConfigTest extends ConfigArbre {
    afficher(noeud: Arbre): string {
        if (noeud instanceof Objet) {
            if (noeud.estOuvert) {
                return null;
            }
            return noeud.type;
        }
        return null;
    }
    estTable(tableau: Tableau, typeService: TypeService): boolean {
        if (tableau.typeBase === 'TypeDef') {
            return false;
        }
        return true;

    }
      nomTypes( racine: Arbre , noms: string[]) {
      if (racine instanceof Objet) {
        racine.proprietes.forEach( prop => {
          if (prop.nom === 'nom') {
            if (prop.valeur instanceof ValeurString) {
              noms.push(prop.valeur.contenu);
            }
          }
          if (prop.nom === 'sousTypes') {
            if (prop.valeur instanceof Tableau) {
              prop.valeur.valeurs.forEach(  arbre => {
              this.nomTypes(arbre, noms); } );
            }
          }
        });
      }
    }
    choix(racine: Arbre, chemin: Chemin): string[] {
      if (chemin.parent) {
      if (chemin.parent.arbre instanceof Objet) {
        if (chemin.parent.arbre.type === 'TypeRef' ) {
          const ls: string [] = [];
          this.nomTypes(racine , ls);
          return ls;
        }
      }

    } }
}
