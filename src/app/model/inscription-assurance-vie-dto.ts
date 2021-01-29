import {ClientDto} from './client-dto';
import { InscriptionAssuranceVieProduitFinancierDto } from './inscription-assurance-vie-produit-financier-dto';
export class InscriptionAssuranceVieDto {
    id!: String;
	reference!: String;
	client!: ClientDto;
	prix!: String;
    dateInscription!: String;
    iAVPF!: InscriptionAssuranceVieProduitFinancierDto[];
}
