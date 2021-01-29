import { ProduitFinancierDto } from './produit-financier-dto';
export class FormuleDto {
    id!: String;
	reference!: String;
	libelle!: String;
	prix!: String;
    produitFinancier!: ProduitFinancierDto;
}
