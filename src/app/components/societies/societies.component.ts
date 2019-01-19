import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-societies',
  templateUrl: './societies.component.html',
  styleUrls: ['./societies.component.css']
})
export class SocietiesComponent implements OnInit {

  societies:Array<any> = [
	{name:'Consultores SA', date:'15/06/2017'},
	{name:'Consultores Hermanos SAS', date:'15/07/2017'},
	{name:'Consultores Amigos', date:'15/08/2017'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
