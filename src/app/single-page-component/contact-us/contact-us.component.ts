import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contact : any;
  en_data : any;
  es_data : any;

  constructor(private translate: TranslateService,private http: HttpClient) { }

  @ViewChild("f") questionForm: NgForm;


  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  onSubmit(){
    console.log(this.questionForm);
    
  }

  
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
      this.contact = this.en_data?.contact;
    }
    else{
      this.contact = this.es_data?.contact;
    }
  }

}
