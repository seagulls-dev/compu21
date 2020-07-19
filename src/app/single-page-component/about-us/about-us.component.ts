import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  about : any;
  en_data : any;
  es_data : any;
  @ViewChild("f") questionForm: NgForm;

  constructor(private translate: TranslateService,private http: HttpClient) { }

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
      this.about = this.en_data?.about;
    }
    else{
      this.about = this.es_data?.about;
    }
  }
  

}
