import { InscriptionAssuranceVieProduitFinancierDto } from './inscription-assurance-vie-produit-financier-dto';
export class EtatInscriptionDto {
    id!: String;
	reference!: String;
	libelle!: String;
	 iAVPF!:InscriptionAssuranceVieProduitFinancierDto[];
}
