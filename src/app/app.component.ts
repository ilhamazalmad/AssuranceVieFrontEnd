import { Component } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {ConnectionService} from './services/connection.service';
import { ClientDto } from './model/client-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title='Assurance de vie';
  client  = new ClientDto;

  constructor(private _router : Router,
    private _activatedRoute:ActivatedRoute,
    private _service:ConnectionService,){}
  
    ngOnInit(): void {
      if(localStorage.getItem("session") == null)
      {
        localStorage.setItem("session","false");
        (document.getElementById('login') as HTMLElement).textContent="Connexion";
        (document.getElementById('profil') as HTMLElement).hidden=true;
        this._router.navigate(['Login'])

      }
      else if(localStorage.getItem("session") == "false"){
        (document.getElementById('login') as HTMLElement).textContent="Connexion";
        (document.getElementById('profil') as HTMLElement).hidden=true;
        this._router.navigate(['Login'])
      }
      else if(localStorage.getItem("session") == "true"){
        (document.getElementById('login') as HTMLElement).textContent="Deconnexion";
        (document.getElementById('profil') as HTMLElement).hidden=false;
        const id = localStorage.getItem("client");
        if(id != null){
          this._service.findById(id).subscribe(
            data => {
              this.client=data;
              if(this.client != null)
              {
                (document.getElementById('profil') as HTMLElement).textContent=this.client.nom+"_"+ this.client.prenom;
                this._router.navigate(['/'])
              }
              else
              this.connexion()
            },
            error =>this.connexion()
          )
        }
        this._router.navigate(['/'])
      }
    }

    profil(){
      this._router.navigate(['Profile'])
    }
    connexion(){
        localStorage.setItem("session","false");
        (document.getElementById('login') as HTMLElement).textContent="Connexion";
        (document.getElementById('profil') as HTMLElement).hidden=true;
      this._router.navigate(['Login'])
      
    }

  
}
