import { Component} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
import defaultLanguage from '../assets/i18n/en.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {

  constructor(private translate: TranslateService) {
    // translate.setDefaultLang('en');
    // translate.use('en');
    translate.setTranslation('en', defaultLanguage);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  title = 'safety-compu21';

  useLanguage(language: string) {
    this.translate.use(language);
  }


}
