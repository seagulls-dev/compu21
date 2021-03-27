import { Component, OnInit,DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-scaffolding',
  templateUrl: './scaffolding.component.html',
  styleUrls: ['./scaffolding.component.css']
})
export class ScaffoldingComponent implements OnInit {

  data : any;
  en_data : any;
  es_data : any;

  
  universe : any;
  en : any;
  es : any;

  constructor(private http: HttpClient,private translate: TranslateService) { }

  ngOnInit(): void {
    this.http.get('../../assets/json/scaffolding.json').subscribe(detail =>{
      this.en_data = detail;
      this.data = this.en_data;
    });
    this.http.get('../../assets/json/scaffolding-es.json').subscribe(detail =>{
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
