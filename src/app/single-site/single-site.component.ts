import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-site',
  templateUrl: './single-site.component.html',
  styleUrls: ['./single-site.component.css']
})
export class SingleSiteComponent implements OnInit {

  currentRoute;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
  }

  ngDoCheck(): void{
    this.currentRoute = this.route.firstChild.snapshot.url[0].path;
    
  }

}
