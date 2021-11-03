import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AddReportComponent } from './add-report/add-report.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { PhotosComponent } from './photos/photos.component';
import { RefreshButtonComponent } from './refresh-button/refresh-button.component'; 
import { ConfirmDialogModule } from './confirm-dialog/confirm-dialog.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    AddReportComponent,
    PhotosComponent,
    RefreshButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ConfirmDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
