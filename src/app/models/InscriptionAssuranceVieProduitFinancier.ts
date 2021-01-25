import {AssuranceVie} from './AssuranceVie';
import {ProduitFinancier} from './ProduitFinancier';
import {Distributeur} from './Distributeur';
import {Formule} from './Formule';
import {EtatInscription} from './EtatInscription';

export interface InscriptionAssuranceVieProduitFinancier{
   id: number;
   iAV: AssuranceVie;
   produit: ProduitFinancier  ;
   policeAssurance: string;
   distributeur: Distributeur;
   prix: number;
   formule: Formule;
   etatInscription: EtatInscription;


}
