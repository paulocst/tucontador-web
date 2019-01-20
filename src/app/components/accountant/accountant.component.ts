import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountantService} from '../../services/accountant.service';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})

export class AccountantComponent implements OnInit {

	accountant:any[] = []

  constructor(
  	private route:ActivatedRoute, 
  	private _servicio:AccountantService

  ) {
  	this.route.params.subscribe(params=>{  		
  		this.accountant = this._servicio.getAccountant(params['id']);
  	})
  }

  ngOnInit() {
  }

}
