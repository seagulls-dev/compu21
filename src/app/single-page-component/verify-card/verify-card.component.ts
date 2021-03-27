import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verify-card',
  templateUrl: './verify-card.component.html',
  styleUrls: ['./verify-card.component.css']
})
export class VerifyCardComponent implements OnInit {

  card : any;
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
      this.card = this.en_data?.card;
    }
    else{
      this.card = this.es_data?.card;
    }
  }
}
