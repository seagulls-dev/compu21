import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // @ViewChild("f") questionForm: NgForm;

  // resolved(captchaResponse: string) {
  //   console.log(`Resolved captcha with response: ${captchaResponse}`);
  // }

  cart : any;
  en_data : any;
  es_data : any;

  constructor(private translate: TranslateService,private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('../../assets/json/en.json').subscribe(detail =>{
      this.en_data = detail;
    });
    this.http.get('../../assets/json/es.json').subscribe(detail =>{
      this.es_data = detail;
    });
  }

  ngDoCheck(){
    const currentLang = this.translate.currentLang;
    if(currentLang == 'en'){
      this.cart = this.en_data?.cart;
    }
    else{
      this.cart = this.es_data?.cart;
    }
  }

  onSubmit(){

  }

}
