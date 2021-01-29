import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ClientDto} from '../model/client-dto';

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
}
