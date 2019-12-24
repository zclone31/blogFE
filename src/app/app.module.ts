import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CKEditorModule} from 'ckeditor4-angular';

import {AppComponent} from './app.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {BlogDetailComponent} from './blog/blog-detail/blog-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {BlogCreateComponent} from './blog/blog-create/blog-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DashbroadComponent} from './dashbroad/dashbroad.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavbarComponent,
    DashbroadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
