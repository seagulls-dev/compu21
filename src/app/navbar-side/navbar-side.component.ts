import { HttpClient } from '@angular/common/http';
import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-side',
  templateUrl: './navbar-side.component.html',
  styleUrls: ['./navbar-side.component.css']
})
export class NavbarSideComponent implements OnInit, DoCheck {

  courseActivated;
  allCourseName;
  allCourse;

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.get('../../assets/SafetyCategory.json').subscribe(detail =>{
      this.allCourseName = detail;
    });
    this.http.get('../../assets/courses.json').subscribe(detail =>{
      this.allCourse = detail;
    });

  }  
  ngDoCheck(): void{
    this.route.paramMap.subscribe(data => {
      for (let i in this.allCourse){
        if (this.allCourse[i].code==data.get("code")){
          this.courseActivated = this.allCourse[i].name;
        }
      }
    })
  }
}
