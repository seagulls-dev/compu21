import { HttpClient } from '@angular/common/http';
import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, DoCheck {
  course;
  allCourse;
  allCourse_es;

  en_data : any;
  es_data : any;
 
  detail : any;
  en : any;
  es : any;

  constructor(private route: ActivatedRoute,private http: HttpClient,private translate: TranslateService) { }

  ngOnInit(): void {
    this.http.get('../../assets/courses.json').subscribe(details =>{
      this.en_data = details;
      this.allCourse = this.en_data;
    });
    this.http.get('../../assets/courses-es.json').subscribe(details =>{
      this.es_data = details;
      this.allCourse_es = this.es_data;
    });
    this.http.get('../../assets/json/en.json').subscribe(details =>{
      this.en = details;
    });
    this.http.get('../../assets/json/es.json').subscribe(details =>{
      this.es = details;
    });
  }  

  ngDoCheck(): void{
    const currentLang = this.translate.currentLang;
    if(currentLang == 'en'){
      // this.data = this.en_data;
      this.detail = this.en?.detail;
    }
    else{
      // this.data = this.es_data;
      this.detail = this.es?.detail;
    }

    this.route.paramMap.subscribe(data => {
      for (let i in this.allCourse){
        if (this.allCourse[i].code==data.get("code")){
          if(currentLang == 'en'){
            this.course = this.allCourse[i];
          }
          else if(this.allCourse_es != undefined){
            this.course = this.allCourse_es[i];
          }
          
        }
      }
    });
  }

}
