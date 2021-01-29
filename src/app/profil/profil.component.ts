import { Component, OnInit } from '@angular/core';
import { ClientDto } from '../model/client-dto';
import {ConnectionService} from '../services/connection.service';
import {ActivatedRoute,Router} from '@angular/router';
import { loadavg } from 'os';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  client   = new ClientDto;
  other   = new ClientDto;
  ngOnInit(): void {
    this.load()
  }
  constructor(private _service:ConnectionService,
              private _router : Router,
              private _activatedRoute:ActivatedRoute){}
  modifier(){
    this.verifier()
    
  } 
  verifier(){
    this._service.findByCin(this.client.cin).subscribe(
      data => {
         this.other= data;
         if(this.other != null && this.other.id!=this.client.id && this.other.id != null){
          alert("Le Cin existe deja" )
         }
         else{
          this._service.findByTelephone(this.client.telephone).subscribe(
            data => {
               this.other= data;
               if(this.other != null && this.other.id!=this.client.id && this.other.id != null){
                alert("Le numéro de téléphone existe deja" )
               }
               else{
                this.save() 
               }
              }
          )
         }
      }
    )
  }

  save(){
    this._service.save(this.client).subscribe(
      data => {
        this.client=data
        if(this.client != null)
        {
          alert("Modification réussite :"+ this.client.nom+" "+ this.client.prenom)
          localStorage.setItem("session","true");
          localStorage.setItem("client",this.client.id);
          (document.getElementById('login') as HTMLElement).textContent="Deconnexion";
          (document.getElementById('profil') as HTMLElement).hidden=false;
          (document.getElementById('profil') as HTMLElement).textContent=this.client.nom+" "+ this.client.prenom;
          this._router.navigate(['/Profile'])
        }
        else
        alert("Erreur : la Modification n'était pas effectuée !!  " )
      },
      error =>alert(" Erreur : la Modification n'était pas effectuée !! ")
    )
  }

  load(){
    const id = localStorage.getItem("client")
    if(id != null)
    {
      this._service.findById(id).subscribe(
        data => {
          this.client=data;
          (document.getElementById('nom') as HTMLElement).textContent=this.client.nom;
          (document.getElementById('prenom') as HTMLElement).textContent=this.client.prenom;
          (document.getElementById('tel') as HTMLElement).textContent=this.client.telephone;
          (document.getElementById('cin') as HTMLElement).textContent=this.client.cin;
          (document.getElementById('adresse') as HTMLElement).textContent=this.client.adresse; 
          }
      )
    }
  }
}
