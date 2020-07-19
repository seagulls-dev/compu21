import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-sst-requirement',
  templateUrl: './new-sst-requirement.component.html',
  styleUrls: ['./new-sst-requirement.component.css']
})
export class NewSstRequirementComponent implements OnInit {

  home : any;
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
      this.home = this.en_data?.home;
    }
    else{
      this.home = this.es_data?.home;
    }
  }

}
