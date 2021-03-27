import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-on-site-course',
  templateUrl: './on-site-course.component.html',
  styleUrls: ['./on-site-course.component.css']
})
export class OnSiteCourseComponent implements OnInit {

  onsite : any;
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
      this.onsite = this.en_data?.onsite;
    }
    else{
      this.onsite = this.es_data?.onsite;
    }
  }

}
