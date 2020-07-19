import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-virtual-course',
  templateUrl: './virtual-course.component.html',
  styleUrls: ['./virtual-course.component.css']
})
export class VirtualCourseComponent implements OnInit {

  virtualList:any;

  virtualList_en : object[] = [
    {
      name: "Virtual 10 hour SST bundle", 
      description : "8 hours of Fall Protection and 2 hours of Drug and Alcohol Awareness.",
      old_price : 310,
      price: 260,
      url : "/site-training/all-on-site-training"
    },
    {
      name: "Virtual 32 hour SST bundle supervisor",
      description : "8-Hour Chapter 33, 8-Hour Fall Prevention, 4-Hour Elective Courses, 8-Hour Prescribed Courses and 4-Hour Support Scaffold User & Refresher",
      old_price : 220,
      price: 180,
      url : "/course-page/sst_super"
    },
    {
      name: "Virtual 40 hours Site Safety Manager",
      description : "This course is a comprehensive review of Chapter 33 and the Rules of the City of New York that pertain to public protection",
      old_price : 90,
      price: 60,
      url : "/course-page/SAF-102"
    },
    
  ];

  virtualList_es : object[] = [
    {
      name: "Paquete virtual de 10 horas SST", 
      description : "8 horas de protección contra caídas y 2 horas de concientización sobre drogas y alcohol.",
      old_price : 310,
      price: 260,
      url : "/site-training/all-on-site-training"
    },
    {
      name: "Supervisor virtual de paquete SST de 32 horas",
      description : "Capítulo 33 de 8 horas, Prevención de caídas de 8 horas, Cursos optativos de 4 horas, Cursos prescritos de 8 horas y Soporte y actualización de andamios de soporte de 4 horas",
      old_price : 220,
      price: 180,
      url : "/course-page/sst_super"
    },
    {
      name: "Administrador de seguridad del sitio virtual de 40 horas",
      description : "Este curso es una revisión exhaustiva del Capítulo 33 y las Reglas de la Ciudad de Nueva York relacionadas con la protección pública.",
      old_price : 90,
      price: 60,
      url : "/course-page/SAF-102"
    },
    
  ];

  virtual : any;
  en_data : any;
  es_data : any;
  online : any;

  constructor(private translate: TranslateService,private http: HttpClient) { }

  ngOnInit(): void {
    this.virtualList = this.virtualList_en;
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
      this.virtualList = this.virtualList_en;
      this.virtual = this.en_data?.virtual;
      this.online = this.en_data?.online;
    }
    else{
      this.virtualList = this.virtualList_es;
      this.virtual = this.es_data?.virtual;
      this.online = this.es_data?.online;
    }
    
  }

}
