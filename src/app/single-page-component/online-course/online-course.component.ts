import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import {TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-online-course',
  templateUrl: './online-course.component.html',
  styleUrls: ['./online-course.component.css']
})
export class OnlineCourseComponent implements OnInit {
  onlineList : object[] = [
    {
      name: "ONLINE SST 10 Bundle (ENGLISH) 8 hours of Fall Protection and 2 hours of Drug and Alcohol Awareness.", 
      code: "Test Course",
      old_price : 280,
      price: 215,
      url : "/site-training/all-on-site-training"
    },
    {
      name: "ONLINE 8 hours of Fall Protection",
      old_price : 220,
      price: 180,
      url : "/course-page/SST-307"
    },
    {
      name: "ONLINE 2 hours of Drug and Alcohol Awareness",
      old_price : 90,
      price: 60,
      url : "/course-page/SST-305"
    },
    {
      name: "Paquete SST 10 EN LÍNEA (INGLÉS) 8 horas de protección contra caídas y 2 horas de concientización sobre drogas y alcohol",
      old_price : 280,
      price:220,
      url : "/site-training/all-on-site-training"
    },
    {
      name: "ONLINE 8 horas de protección contra caídas",
      old_price : 220,
      price: 180,
      url : "/course-page/SST-307"
    },
    {
      name: "EN LÍNEA 2 horas de concientización sobre drogas y alcohol",
      old_price : 90,
      price: 60,
      url : "/course-page/SST-305"
    },
    
  ];

  addedtoCart: boolean =false;
  logined: boolean = false;

  online : any;
  en_data : any;
  es_data : any;

  constructor(private auth: AngularFireAuth,private translate: TranslateService,private http: HttpClient) { }


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
      this.online = this.en_data?.online;
    }
    else{
      this.online = this.es_data?.online;
    }
  }


}
