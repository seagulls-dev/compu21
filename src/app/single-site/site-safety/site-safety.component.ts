import { Component, OnInit,DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-site-safety',
  templateUrl: './site-safety.component.html',
  styleUrls: ['./site-safety.component.css']
})
export class SiteSafetyComponent implements OnInit {

  data : any;
  en_data : any;
  es_data : any;

  universe : any;
  en : any;
  es : any;

  constructor(private http: HttpClient,private translate: TranslateService) { }

  ngOnInit(): void {
    this.http.get('../../assets/json/site-safety.json').subscribe(detail =>{
      this.en_data = detail;
      this.data = this.en_data;
    });
    this.http.get('../../assets/json/site-safety-es.json').subscribe(detail =>{
      this.es_data = detail;
    });
    this.http.get('../../assets/json/en.json').subscribe(detail =>{
      this.en = detail;
    });
    this.http.get('../../assets/json/es.json').subscribe(detail =>{
      this.es = detail;
    });
  }


  ngDoCheck(){
    const currentLang = this.translate.currentLang;
    if(currentLang == 'en'){
      this.data = this.en_data;
      this.universe = this.en?.universe;
    }
    else{
      this.data = this.es_data;
      this.universe = this.es?.universe;
    }
  }


}
