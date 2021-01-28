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
  title = 'angular2';
  ngOnInit(): void {
  }
  constructor(private _service:ConnectionService,
              private _router : Router,
              private _activatedRoute:ActivatedRoute){}
 
  inscrire(){
    this._service.inscription(this.client).subscribe(
      data => {
        if(data ==1)
        alert("Inscription réussite ")
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
          if(this.client != null)
          {
            alert("Connexion réussite :"+ this.client.nom+" "+ this.client.prenom)
            this._router.navigateByUrl('Home')
          }
          else
          alert("Erreur : la connexion n'était pas effectuée ")
        },
      error =>alert(" Erreur : la connexion n'était pas effectuée !! ")
    ) 
    
  }

}
