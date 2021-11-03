import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Ab1Component } from './about/ab1/ab1.component';
import { FaqComponent } from './about/faq/faq.component';
import { SpkComponent } from './about/spk/spk.component';
import { G1Component } from './about/g1/g1.component';
import { PrepareComponent } from './about/prepare/prepare.component';
import { ResultComponent } from './about/result/result.component';
import { FindcenterComponent } from './about/findcenter/findcenter.component';
import { HariPipe } from './hari.pipe';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    Ab1Component,
    FaqComponent,
    SpkComponent,
    G1Component,
    PrepareComponent,
    ResultComponent,
    FindcenterComponent,
    HariPipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
