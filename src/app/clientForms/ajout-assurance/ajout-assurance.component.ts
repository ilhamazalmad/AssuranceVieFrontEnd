import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Client} from '../../models/Client';



@Component({
  selector: 'app-ajout-assurance',
  templateUrl: './ajout-assurance.component.html',
  styleUrls: ['./ajout-assurance.component.css']
})
export class AjoutAssuranceComponent  {
  ClientSide = new FormControl('');
  clientForm = new FormGroup({
   Nom: new FormControl(''),
    Adresse: new FormControl(''),
    Telephone: new FormControl(''),
    Cin : new FormControl(''),
    DateNaissance : new FormControl('')
  });

}
