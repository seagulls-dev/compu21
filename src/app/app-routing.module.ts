import { OnlineCourseComponent } from './single-page-component/online-course/online-course.component';
import { HomeComponent } from './home/home.component';
import { SinglePageComponent } from './single-page-component/single-page.component';
import { FaqPageComponent } from './single-page-component/faq-page/faq-page.component';
import { AboutUsComponent } from './single-page-component/about-us/about-us.component';
import { ContactUsComponent } from './single-page-component/contact-us/contact-us.component';
import { NewSstRequirementComponent } from './single-page-component/new-sst-requirement/new-sst-requirement.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SchedulePageComponent } from './single-page-component/schedule-page/schedule-page.component';
import { VirtualCourseComponent } from './single-page-component/virtual-course/virtual-course.component';
import { OnSiteCourseComponent } from './single-page-component/on-site-course/on-site-course.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { SingleSiteComponent } from './single-site/single-site.component';
import { AutocadComponent } from './single-site/autocad/autocad.component';
import {FlaggingComponent} from './single-site/flagging/flagging.component';
import {OshaComponent} from './single-site/osha/osha.component';
import {ScaffoldingComponent} from './single-site/scaffolding/scaffolding.component';
import {SiteSafetyComponent} from './single-site/site-safety/site-safety.component';
import {SstCardComponent} from './single-site/sst-card/sst-card.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';


import { AllCourseComponent } from './all-course/all-course.component';
import { VerifyCardComponent } from './single-page-component/verify-card/verify-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from "@angular/fire/auth-guard";
import { AllSiteTrainingComponent } from './single-site/all-site-training/all-site-training.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToAccount = () => redirectLoggedInTo(['safety/myAccount']);


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"safety", component: SinglePageComponent, 
    children: [
      {path:"Schedules", component: SchedulePageComponent},
      {path:"New-SST-Requirement" , component: NewSstRequirementComponent},
      {path:"About-us", component: AboutUsComponent},
      {path:"Contact-us", component: ContactUsComponent},
      {path:"FAQ", component: FaqPageComponent},
      {path:'All-Classes', component: AllCourseComponent},
      {path:"Online-Classes", component: OnlineCourseComponent},
      {path:"OnSite-Classes", component: OnSiteCourseComponent},
      {path:"carts", component: CartComponent},
      {path:"login", component: LoginComponent},
      {path:"cards", component: VerifyCardComponent},
      {path:"Virtual-Classes", component: VirtualCourseComponent},
    ]},
  {path:"course-page/:code", component: CourseDetailComponent},
  {path:"site-training", component: SingleSiteComponent,
    children : [
      {path : "all-on-site-training", component : AllSiteTrainingComponent},
      {path:"sst-card", component: SstCardComponent},
      {path:"site-safety", component: SiteSafetyComponent},
      {path:"scaffolding", component: ScaffoldingComponent},
      {path:"osha", component: OshaComponent},
      {path:"autocad-revit", component: AutocadComponent},
      {path:"flagging", component: FlaggingComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
