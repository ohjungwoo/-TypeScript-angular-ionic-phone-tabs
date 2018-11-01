import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { TvingFreeProviders } from '../../providers/tvingFree-providers';

@IonicPage()
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
  ,providers: [TvingFreeProviders]
})
export class Page3Page {
    public dataList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tvingFreeProviders : TvingFreeProviders) {
    this.getClipList();
  }

  getClipList() {
    this.tvingFreeProviders.getClipList()
      .then(data => {
        this.dataList = data;
      });
  }


  itemTapped(){
      alert('미구현');
  }

}
