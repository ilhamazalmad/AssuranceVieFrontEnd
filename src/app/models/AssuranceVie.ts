import {Client} from './Client';
import {InscriptionAssuranceVieProduitFinancier} from './InscriptionAssuranceVieProduitFinancier';
export interface AssuranceVie {
  id?: number;
  reference: string;
  client?: Client;
  prix?: number;
  dateInscription?: Date;
  iAVPF?: InscriptionAssuranceVieProduitFinancier[];
}
