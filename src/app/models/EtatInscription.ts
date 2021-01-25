import {InscriptionAssuranceVieProduitFinancier} from './InscriptionAssuranceVieProduitFinancier';

export interface EtatInscription {
   id: number;
    reference: string;
    libelle: string;
     iAVPF: InscriptionAssuranceVieProduitFinancier[];
}
