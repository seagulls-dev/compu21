import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.css']
})
export class AllCourseComponent implements OnInit {
  course;
  allCourseJSON = [];

  all : any;
  en_data : any;
  es_data : any;

  allCourses = ["2-Hour Drug and Alcohol Awareness", 
                "8-Hour Fall Prevention", 
                "4-Hour Supported Scaffold User & Refresher",
                "2-Hour Site Safety Plan",
                "2-Hour Tool Box Talks",
                "2-Hour Pre-Task Meetings",
                "1-Hour Confined Space Entry",
                "1-Hour Concrete and Masonry Construction",
                "1-Hour Stairways and Ladders",
                "1-Hour Tools Hand and Power",]

  constructor(private http: HttpClient,private translate: TranslateService) { }

  ngOnInit(): void {
    this.http.get('../../assets/courses.json').subscribe(detail =>{
      // this.allCourseJSON = detail;
    });
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
      this.all = this.en_data?.all;
    }
    else{
      this.all = this.es_data?.all;
    }
  }


}
