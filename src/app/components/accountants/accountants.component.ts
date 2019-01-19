import { Component, OnInit } from '@angular/core';
import { AccountantService} from '../../services/accountant.service';


@Component({
  selector: 'app-accountants',
  templateUrl: './accountants.component.html',
  styleUrls: ['./accountants.component.css']
})

export class AccountantsComponent implements OnInit {

	accountants:any[] = [];

  constructor(private _servicio:AccountantService) {
    this.accountants = _servicio.getAccountants();
  }

  ngOnInit() {
  }

}
