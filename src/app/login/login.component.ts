import { Component, OnInit } from '@angular/core';
import { ClientDto } from '../model/client-dto';
import {ConnectionService} from '../services/connection.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  client  = new ClientDto;
  ngOnInit(): void {
  }
  constructor(private _service:ConnectionService,
              private _router : Router,
              private _activatedRoute:ActivatedRoute){}
 
  inscrire(){
    this._service.save(this.client).subscribe(
      data => {
        this.client=data
        if(this.client != null && this.client.id != null )
        {
          alert("Inscription réussite :"+ this.client.nom+"_"+ this.client.prenom)
          localStorage.setItem("session","true");
          localStorage.setItem("client",this.client.id);
          (document.getElementById('login') as HTMLElement).textContent="Deconnexion";
          (document.getElementById('profil') as HTMLElement).hidden=false;
          (document.getElementById('profil') as HTMLElement).textContent=this.client.nom+"_"+ this.client.prenom;
          this._router.navigate(['/'])
        }
        else
        alert("Erreur : l'inscription n'était pas effectuée !!  " )
      },
      error =>alert(" Erreur : l'inscription n'était pas effectuée !! ")
    )
  }
  connecter(){
      this._service.connexion(this.client).subscribe(
        data => {
          this.client=data
          if(this.client != null && this.client.id != null )
          {
            localStorage.setItem("session","true");
            localStorage.setItem("client",this.client.id);
            (document.getElementById('login') as HTMLElement).textContent="Deconnexion";
            if(this.client.nom != null)
            {
            (document.getElementById('profil') as HTMLElement).hidden=false;
            (document.getElementById('profil') as HTMLElement).textContent=this.client.nom+"_"+ this.client.prenom;
            this._router.navigate(['/'])
            }
            else
            {
            (document.getElementById('profil') as HTMLElement).hidden=true;
            this._router.navigate(['Profile'])
            }
          }
          else
          alert("Erreur : la connexion n'était pas effectuée ")
        },
      error =>alert(" Erreur : la connexion n'était pas effectuée !! ")
    ) 
    
  }

}
