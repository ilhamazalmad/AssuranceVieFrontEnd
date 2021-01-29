import { InscriptionAssuranceVieProduitFinancierDto } from './inscription-assurance-vie-produit-financier-dto';
export class DistributeurDto {
     id !: String;
	 reference !: String;
	 libelle !: String;
	 pwd !: String;
     iAVPF !: InscriptionAssuranceVieProduitFinancierDto[] ;
}
