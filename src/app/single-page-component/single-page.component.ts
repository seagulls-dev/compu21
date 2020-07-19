import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit, DoCheck {
  currentRoute;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void{
    this.currentRoute = this.route.firstChild.snapshot.url[0].path;
    
  }

}
