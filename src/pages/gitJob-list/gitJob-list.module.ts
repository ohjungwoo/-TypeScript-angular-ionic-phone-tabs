import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GitJobListPage } from "./gitJob-list";

@NgModule({
  declarations: [
    GitJobListPage
  ],
  imports: [
    IonicPageModule.forChild(GitJobListPage)
  ]
})
export class Module {}
