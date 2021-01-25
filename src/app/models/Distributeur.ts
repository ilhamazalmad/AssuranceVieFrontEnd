import {InscriptionAssuranceVieProduitFinancier} from './InscriptionAssuranceVieProduitFinancier'
export interface Distributeur{
  id: number;
  reference: string;
  libelle: string;
  iavpf: InscriptionAssuranceVieProduitFinancier[];
}
