import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// EXTERNAL LIBRARIES
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// TESTING LIBRARIES
import { RouterTestingModule } from '@angular/router/testing';

// CONFIG
import { environment } from '@environment/environment';
import { SpyMockConfig } from './spy.spec';
import { routes } from '@src/app/app-routing.module';

// COMPONENTS
import { AppComponent } from '@app/app.component';
import { Tab1Page } from '@pages/tab1/tab1.page';
import { Tab2Page } from '@pages/tab2/tab2.page';
import { Tab3Page } from '@pages/tab3/tab3.page';
import { TabsPage } from '@shared/components/tabs/tabs.page';
import { InfoComponent } from '@shared/components/info/info.component';

export class SetupTest {
  static config = {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule, // HttpClientTestingModule,
      RouterTestingModule.withRoutes(routes),
      CommonModule,
      FormsModule,
      IonicModule.forRoot(),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient],
        }
      })
    ],
    declarations: [
      AppComponent,
      Tab1Page,
      Tab2Page,
      Tab3Page,
      TabsPage,
      InfoComponent
    ],
    providers: SpyMockConfig.Providers,
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
  } ;
}

// tslint:disable-next-line: typedef
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.pathTranslate, '.json');
}

