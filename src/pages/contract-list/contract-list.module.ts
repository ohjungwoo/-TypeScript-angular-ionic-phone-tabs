import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractListPage } from "./contract-list";

@NgModule({
  declarations: [
    ContractListPage
  ],
  imports: [
    IonicPageModule.forChild(ContractListPage)
  ]
})
export class Module {}
