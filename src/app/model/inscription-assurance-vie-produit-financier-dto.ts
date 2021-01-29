import { InscriptionAssuranceVieDto } from './inscription-assurance-vie-dto';
import { ProduitFinancierDto } from './produit-financier-dto';
import {EtatInscriptionDto} from './etat-inscription-dto';
import {DistributeurDto} from './distributeur-dto';
import {FormuleDto} from './formule-dto';

export class InscriptionAssuranceVieProduitFinancierDto {
    id!: String ;
	iAV!: InscriptionAssuranceVieDto;
	produit!: ProduitFinancierDto;
	policeAssurance!: String ;
	distributeur!: DistributeurDto;
	prix!: String ;
	formule!: FormuleDto;
	etatInscription!: EtatInscriptionDto;
}
