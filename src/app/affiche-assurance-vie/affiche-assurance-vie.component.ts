import { Component, OnInit } from '@angular/core';
import { DistributeurDto } from '../model/distributeur-dto';
import {ConnectionService} from '../services/connection.service';
import {ActivatedRoute,Router} from '@angular/router';
import { InscriptionAssuranceVieProduitFinancierDto } from '../model/inscription-assurance-vie-produit-financier-dto';

@Component({
  selector: 'app-affiche-assurance-vie',
  templateUrl: './affiche-assurance-vie.component.html',
  styleUrls: ['./affiche-assurance-vie.component.css']
})
export class AfficheAssuranceVieComponent implements OnInit {
  distributeur  = new DistributeurDto;
  iAVPFs!: InscriptionAssuranceVieProduitFinancierDto[];
  cin : any;etat : any;prix:any;distr:any;

  constructor(private _service:ConnectionService,
    private _router : Router,
    private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    localStorage.setItem("page","iavpfs")
    var id = localStorage.getItem("client")
      if (id != null){
        this._service.findIAVPFByClient(id).subscribe(
          data => {
            this.iAVPFs=data
          }
        ) 
      }
    
  }

  
   
  delete(id:string){
    if(confirm("Voulez-vous vraiment supprimer ce contrat définitivement??")){
      this._service.deleteIAVPF(id).subscribe() 
      window.location.reload();
    }
    
  }
  report(id :string){
      //this._service.generateReport(id).subscribe()
      document.location.href = "http://localhost:8090/assurance-api/IAVPF/report/IDP/"+id;

  }
  confirm(id:string,etat:any){
    if(etat == 1)
    {
      this._service.updateEtat(id,"2").subscribe() 
      window.location.reload();
    }
    else
    alert('le contrat est  deja confimé')
  }

}
