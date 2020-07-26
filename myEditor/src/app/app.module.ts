import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import * as $ from 'jquery';
import { ColorPickerModule } from 'ngx-color-picker';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,CommonModule,
    CKEditorModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
