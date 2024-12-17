import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { AppRoutingModule } from './shared/routers/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PagesModule } from './pages/pages.module';
import { ContainerModule } from './shared/components/container/container.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,               // Importação única do BrowserModule
    BrowserAnimationsModule,     // Importação única do BrowserAnimationsModule
    NgxUiLoaderModule,
    MaterialModule,
    AppRoutingModule,
    ContainerModule,
    PagesModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
