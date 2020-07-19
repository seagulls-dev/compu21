import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  userLogined: boolean;

  public isMenuCollapsed = true;

  menu : any;
  en_data : any;
  es_data : any;

  constructor(private afa: AngularFireAuth,
              private router: Router,private translate: TranslateService,private http: HttpClient) { 
  }


  ngOnInit(): void {
    this.http.get('../../assets/json/en.json').subscribe(detail =>{
      this.en_data = detail;
    });
    this.http.get('../../assets/json/es.json').subscribe(detail =>{
      this.es_data = detail;
    });
  }

  userPage(){
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngDoCheck(){
    const currentLang = this.translate.currentLang;
    if(currentLang == 'en'){
      this.menu = this.en_data?.menu;
    }
    else{
      this.menu = this.es_data?.menu;
    }
  }


}
