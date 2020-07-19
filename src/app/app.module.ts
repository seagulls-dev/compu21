import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule,HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule, ORIGIN } from '@angular/fire/functions';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { NavbarSideComponent } from './navbar-side/navbar-side.component';
import { AboutUsComponent } from './single-page-component/about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { SchedulePageComponent } from './single-page-component/schedule-page/schedule-page.component';
import { NewSstRequirementComponent } from './single-page-component/new-sst-requirement/new-sst-requirement.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { FaqPageComponent } from './single-page-component/faq-page/faq-page.component';
import { RecaptchaFormsModule } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { SinglePageComponent } from './single-page-component/single-page.component';
import { HomeComponent } from './home/home.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxIndexedDBModule, DBConfig } from "ngx-indexed-db";
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { OnlineCourseComponent } from './single-page-component/online-course/online-course.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireStorageModule } from '@angular/fire/storage'
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {WebcamModule} from 'ngx-webcam';
import { SafePipe } from './safelink.pipe';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';


import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { VerifyCardComponent } from './single-page-component/verify-card/verify-card.component';
import { VirtualCourseComponent } from './single-page-component/virtual-course/virtual-course.component';
import { OnSiteCourseComponent } from './single-page-component/on-site-course/on-site-course.component';
import { ContactUsComponent } from './single-page-component/contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleSiteComponent } from './single-site/single-site.component';
import { SstCardComponent } from './single-site/sst-card/sst-card.component';
import { SiteSafetyComponent } from './single-site/site-safety/site-safety.component';
import { ScaffoldingComponent } from './single-site/scaffolding/scaffolding.component';
import { OshaComponent } from './single-site/osha/osha.component';
import { AutocadComponent } from './single-site/autocad/autocad.component';
import { FlaggingComponent } from './single-site/flagging/flagging.component';
import { AllSiteTrainingComponent } from './single-site/all-site-training/all-site-training.component';
// import { ContactUsComponent } from './single-page-component/contact-us/contact-us.component';


const dbConfig: DBConfig  = {
  name: 'userData',
  version: 1,
  objectStoresMeta: [{
    store: 'userData',
    storeConfig: { keyPath: 'uid',autoIncrement: false},
    storeSchema: []
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailComponent,
    AllCourseComponent,
    NavbarSideComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    MenuBarComponent,
    CoursePageComponent,
    SchedulePageComponent,
    NewSstRequirementComponent,
    FaqPageComponent,
    SinglePageComponent,
    HomeComponent,
    OnlineCourseComponent,
    SafePipe,
    CartComponent,
    LoginComponent,
    VerifyCardComponent,
    VirtualCourseComponent,
    OnSiteCourseComponent,
    ContactUsComponent,
    SingleSiteComponent,
    SstCardComponent,
    SiteSafetyComponent,
    ScaffoldingComponent,
    OshaComponent,
    AutocadComponent,
    FlaggingComponent,
    AllSiteTrainingComponent
    // ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    HttpClientJsonpModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase,() => 'Compu21 Safety Training',
      {
        enableFirestoreSync: false, // enable/disable autosync users with firestore
        toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
        authGuardFallbackURL: '/loggedout', // url for unauthenticated users - to use in combination with canActivate feature on a route
        authGuardLoggedInURL: '/loggedin', // url for authenticated users - to use in combination with canActivate feature on a route
        passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
        passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
        // Same as password but for the name
        nameMaxLength: 50,
        nameMinLength: 2,
        // If set, sign-in/up form is not available until email has been verified.
        // Plus protected routes are still protected even though user is connected.
        guardProtectedRoutesUntilEmailIsVerified: true,
        enableEmailVerification: true, // default: true
      }),
    MatPasswordStrengthModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    AngularFireStorageModule,
    MatTabsModule,
    MatSnackBarModule,
    WebcamModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/');
}
