import { InscriptionAssuranceVieProduitFinancierDto } from './inscription-assurance-vie-produit-financier-dto';
import {FormuleDto} from './formule-dto';
export class ProduitFinancierDto {
    id!: String;
	libelle!: String;
	code!: String;
	formules!: FormuleDto[];
	iAVPF!: InscriptionAssuranceVieProduitFinancierDto[];
}
