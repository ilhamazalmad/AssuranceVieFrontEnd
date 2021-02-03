import { Component, OnInit } from '@angular/core';
import {ClientDto} from '../model/client-dto';
import {InscriptionAssuranceVieDto} from '../model/inscription-assurance-vie-dto';
import {InscriptionAssuranceVieProduitFinancierDto} from '../model/inscription-assurance-vie-produit-financier-dto';
import {DistributeurDto} from '../model/distributeur-dto';
import {EtatInscriptionDto} from '../model/etat-inscription-dto';
import {FormuleDto} from '../model/formule-dto';
import {ProduitFinancierDto} from '../model/produit-financier-dto';
import {ConnectionService} from '../services/connection.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-ajout-assurance-vie',
  templateUrl: './ajout-assurance-vie.component.html',
  styleUrls: ['./ajout-assurance-vie.component.css']
})
export class AjoutAssuranceVieComponent implements OnInit {

  form = String;
  client = new ClientDto;
  distributeur = new DistributeurDto;
  produit =new ProduitFinancierDto;
  produit2 =new ProduitFinancierDto;
  formule = new FormuleDto;
  formule2 = new FormuleDto;
  iav = new InscriptionAssuranceVieDto;
  iavpfs : Array<any> = [];
  iavpf = new InscriptionAssuranceVieProduitFinancierDto;
  etat  = new EtatInscriptionDto;
  produits !: ProduitFinancierDto[];
  formules !: FormuleDto[];
  formulesChoisis : Array<any> = [];
  total :any;
  constructor(private _service:ConnectionService,
    private _router : Router,
    private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._service.findAllProduits().subscribe(
      data => {
        this.produits=data
      })
  }

   findFormule(val:any){
     this._service.findProduitByLibelle(val).subscribe(
      data => {
        this.produit2= data;
        this._service.findAllFormules(this.produit2.id).subscribe(
          data => {
            this.formules=data
          }
        ) 
      })
  }
  add(libelle:any){
    this._service.findFormuleByLibelle(libelle).subscribe(
      data => {
        if(data != null){
          this.formule=data;
          this.formulesChoisis.push(this.formule);
          this.total=0;
          this.formulesChoisis.forEach(element => {
            this.formule2=element;
            this.total = this.total + Number(this.formule2.prix);
          });
          this.formule= new FormuleDto();

        } 
        else 
        alert("error")       
      })
  }

  Enregistrer(){
    const id = localStorage.getItem("client")
    if(id != null)
   {
    this._service.findById(id).subscribe(
    data =>{ this.iav.client=data;}
    )
    this.formulesChoisis.forEach(element => {
      this.formule2=element;
      this.iavpf.produit= this.formule2.produitFinancier;
      this.iavpf.formule= this.formule2;
      this.iavpfs.push(this.iavpf)
      });
      this.iav.iAVPF=this.iavpfs;
      
   }
   this._service.saveIAV(this.iav).subscribe(
    data =>{
      if(data == 1)
      {
        alert("inscription réussite")
      }
      else if(data == -2){
        alert(" Vous devez compléter vos informations personnelles !!")
        this._router.navigate(["Profile"])
      }
      else
        {
          alert(" Erreur : l'inscription n'était pas effectuée !!")
        }
    })
    
    
  }
  
}
