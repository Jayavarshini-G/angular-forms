import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JobportalComponent } from './jobportal/jobportal.component';
// existing code hidden for display purpose
@NgModule({
  declarations: [
    JobportalComponent,
  ],
  imports: [BrowserModule,  HttpClientModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [ JobportalComponent],
})
export class AppModule {}