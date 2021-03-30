import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SideMenuComponent } from './layout/generalView/side-menu.component';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import { HeaderTabsComponent } from './layout/header-tabs/header-tabs.component';
import { GeneralViewComponent } from './layout/general-view/general-view.component';
import {CarouselModule} from 'primeng/carousel';
import { ProductService } from './core/productservice';
import { HttpClientModule } from '@angular/common/http';
import {TabMenuModule} from 'primeng/tabmenu';
import {ChartModule} from 'primeng/chart';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';
import {FormsModule} from '@angular/forms';
import { ProgramsComponent } from './layout/programs/programs.component';

@NgModule({
  declarations: [
    AppComponent,
    // SideMenuComponent,
     HeaderTabsComponent,
    GeneralViewComponent,
    ProgramsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    ButtonModule,
    MenuModule,
    CarouselModule,
    HttpClientModule,
    TabMenuModule,
    ChartModule,
    ProgressBarModule,
    ToastModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
