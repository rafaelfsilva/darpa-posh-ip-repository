import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {SuiModule} from 'ng2-semantic-ui';

import {routing} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import {SemanticDropdownComponent} from './components/semantic-dropdown/semantic-dropdown.component';

import {DashboardComponent} from './components/dashboard';
import {IPComponent} from './components/ip-view';
import {IPListComponent} from './components/ip-list';

import {UserService, DashboardEvent} from './services';

// providers
// import {AceModule, AceConfigInterface, ACE_CONFIG} from 'ngx-ace-wrapper';
import {BsDropdownModule, TabsModule, TooltipModule} from 'ngx-bootstrap';
import {CytoscapeModule} from 'ngx-cytoscape';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faLock, faTags} from '@fortawesome/free-solid-svg-icons';
import {ToastrModule, QueueComponent} from 'pb-ngx-toast';

// const DEFAULT_ACE_CONFIG: AceConfigInterface = {
//   tabSize: 4,
//   displayIndentGuides: true,
//   minLines: 20,
//   showGutter: true,
//   fontSize: '14px',
//   mode: 'json',
//   autoScrollEditorIntoView: true,
//   useSoftTabs: true
// };

// Add an icon to the library for convenient access in other components
library.add(faLock, faTags);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    IPComponent,
    IPListComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    routing,
    // BsDropdownModule.forRoot(),
    // TabsModule.forRoot(),
    // TooltipModule.forRoot(),
    CytoscapeModule,
    HttpClientModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule,
    SuiModule
  ],
  providers: [
    DashboardEvent,
    UserService,
    // AceModule,
    // {provide: ACE_CONFIG, useValue: DEFAULT_ACE_CONFIG}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
