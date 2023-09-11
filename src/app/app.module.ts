import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importação do que vai usar lá na injeção do app-root
import { appC } from './app.component';
import { CurriculumHeaderComponent } from './headCurriculo/curriculum-header.component';
import { CurriculumExperienceComponent } from './expCurriculo/curriculum-experience.component';
import { CurriculumFormationComponent } from './formCurriculo/formacao';

@NgModule({
  declarations: [
    appC,
    CurriculumHeaderComponent,
    CurriculumExperienceComponent,
    CurriculumFormationComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [appC],
})
export class AppModule {}
