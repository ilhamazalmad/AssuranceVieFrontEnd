import { Component, OnInit } from '@angular/core';
import { ClientDto } from '../model/client-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  client  = new ClientDto;

  constructor() { }

  ngOnInit(): void {
  }

}
