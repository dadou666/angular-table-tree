import { ConfigArbre , Arbre , Objet , Tableau , TypeService} from 'dadou-tree';


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
}
