import { Component, OnInit } from '@angular/core';

declare function validate(): void; 
declare var $:any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() {
    validate();
  }
 
  ngOnInit(): void {
  }

}
