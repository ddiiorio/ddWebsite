import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatTableModule, MatSnackBarModule, MatDividerModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatRippleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NotificationsService } from './services/notifications.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PortfolioComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatSnackBarModule,
    MatDividerModule,
    MatToolbarModule, 
    MatMenuModule, 
    MatIconModule, 
    MatRippleModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: {animation: 'Home'}, pathMatch: 'full' },
      { path: 'portfolio', component: PortfolioComponent, data: {animation: 'Portfolio'} },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
