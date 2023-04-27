import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from "./dashboard/dashboard.module";
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DashboardModule,
        AppRoutingModule,
        AuthModule,
        
    ]
})
export class AppModule { }
