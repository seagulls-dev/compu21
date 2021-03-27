import { Component, OnInit,DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-all-site-training',
  templateUrl: './all-site-training.component.html',
  styleUrls: ['./all-site-training.component.css']
})
export class AllSiteTrainingComponent implements OnInit {

  data : any;
  en_data : any;
  es_data : any;

  all_site : any;
  en_translate : any;
  es_translate : any;

  constructor(private http: HttpClient,private translate: TranslateService) { }

  ngOnInit(): void {
    this.http.get('../../assets/json/all-site-training.json').subscribe(detail =>{
      this.en_data = detail;
      this.data = this.en_data;
    });
    this.http.get('../../assets/json/all-site-training-es.json').subscribe(detail =>{
      this.es_data = detail;
    });
    this.http.get('../../assets/json/en.json').subscribe(detail =>{
      this.en_translate = detail;
    });
    this.http.get('../../assets/json/es.json').subscribe(detail =>{
      this.es_translate = detail;
    });
  }

  ngDoCheck(){
    const currentLang = this.translate.currentLang;
    if(currentLang == 'en'){
      this.data = this.en_data;
      this.all_site = this.en_translate?.all_site;
    }
    else{
      this.data = this.es_data;
      this.all_site = this.es_translate?.all_site;
    }
  }

}
