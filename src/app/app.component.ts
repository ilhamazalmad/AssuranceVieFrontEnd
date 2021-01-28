import { Component } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title='Assurance de vie';

  constructor(private _router : Router,
    private _activatedRoute:ActivatedRoute){}
  
    ngOnInit(): void {
      this._router.navigateByUrl('Login')
    }
  
}
