import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { ContractProviders } from '../../providers/contract-providers';

@IonicPage()
@Component({
  selector: 'page-contract-detail',
  templateUrl: 'contract-detail.html',
  providers: [ContractProviders]
})
export class ContractDetailPage {
  public person: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public contractProviders: ContractProviders) {
    this.person = navParams.get('person');
  }

  ionViewDidLoad() {
    this.contractFindById(this.person);
  }

  contractFindById(person) {
    this.contractProviders.contractFindById(person)
      .then(data => {
        this.person = data;
      });
  }
}
