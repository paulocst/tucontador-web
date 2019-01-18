import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent implements OnInit {

  accountants:Array<any> = [
    {name:'Jose', date:'10/05/02'},
    {name:'Mario', date:'10/06/02'},
    {name:'Luis', date:'10/07/02'}
  ]	

  constructor() { }

  ngOnInit() {
  }

}
