import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ClientDto} from '../model/client-dto';
import {ProduitFinancierDto} from '../model/produit-financier-dto';
import {FormuleDto} from '../model/formule-dto';
import {InscriptionAssuranceVieDto} from '../model/inscription-assurance-vie-dto';
import {InscriptionAssuranceVieProduitFinancierDto} from '../model/inscription-assurance-vie-produit-financier-dto';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private _http :HttpClient) { }
  public save( client :ClientDto):Observable<any>{
    return this._http.post<ClientDto>("http://localhost:8090/assurance-api/Client/register",client);
  }
  public connexion(client :ClientDto):Observable<any>{
    return this._http.get<ClientDto>("http://localhost:8090/assurance-api/Client/login/cin/"+client.cin+"/pwd/"+client.pwd);
  }
  public findById(id :String):Observable<any>{
    return this._http.get<ClientDto>("http://localhost:8090/assurance-api/Client/find/"+id);
  }
  public findByCin(cin :String):Observable<any>{
    return this._http.get<ClientDto>("http://localhost:8090/assurance-api/Client/find/cin/"+cin);
  }
  public findByTelephone(tel :String):Observable<any>{
    return this._http.get<ClientDto>("http://localhost:8090/assurance-api/Client/find/telephone/"+tel);
  }
  public findAllProduits():Observable<any>{
    return this._http.get<ProduitFinancierDto[]>("http://localhost:8090/assurance-api/Produit/find");
  }
  public findProduitByLibelle(value:String):Observable<any>{
    return this._http.get<ProduitFinancierDto>("http://localhost:8090/assurance-api/Produit/find/libelle/"+value);
  }
  public findProduitById(value:String):Observable<any>{
    return this._http.get<ProduitFinancierDto>("http://localhost:8090/assurance-api/Produit/find/id/"+value);
  }
  public findAllFormules(id:String):Observable<any>{
    return this._http.get<FormuleDto[]>("http://localhost:8090/assurance-api/Formule/find/produitFinancier/"+id);
  }
  public findFormuleByLibelle(value:String):Observable<any>{
    return this._http.get<FormuleDto>("http://localhost:8090/assurance-api/Formule/find/libelle/"+value);
  }
  public saveIAV(value:InscriptionAssuranceVieDto):Observable<any>{
    return this._http.post("http://localhost:8090/assurance-api/IAV/save",value);
  }
  public deleteIAVPF(id :String):Observable<any>{
    return this._http.delete("http://localhost:8090/assurance-api/IAVPF/delete/id/"+id);
  }
  public updateEtat(id :String,etat :String):Observable<any>{
    return this._http.put("http://localhost:8090/assurance-api/IAVPF/update/"+id+"/"+etat,null);
  }
  public findIAVPFByClient(id :String):Observable<any>{
    return this._http.get<InscriptionAssuranceVieProduitFinancierDto[]>("http://localhost:8090/assurance-api/IAVPF/find/client/"+id);
  }

}
