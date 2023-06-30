import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FormsModule } from '@angular/forms';
import { EducationComponent } from './components/education/education.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		BannerComponent,
		ExperienceComponent,
  EducationComponent,
	],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
