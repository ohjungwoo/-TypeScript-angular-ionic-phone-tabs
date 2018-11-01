import { Component } from '@angular/core';

import { NavController, NavParams, IonicPage } from 'ionic-angular';
import {SuperTabsController} from "ionic2-super-tabs";

import { HardwareBackButtonService } from '../../providers/backbutton';


@IonicPage({
	segment: 'home/:type'
})
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	//ListPage: any = 'ListPage';
	posts: any = 'PostsPage';

	//page1: any = 'Page1Page';
	page2: any = 'Page2Page';
	page3: any = 'Page3Page';

	showIcons: boolean = true;
	showTitles: boolean = true;
	pageTitle: string = 'Welcome';

	constructor(public navCtrl: NavController, private navParams: NavParams, private superTabsCtrl: SuperTabsController, private _backBtn: HardwareBackButtonService) {
    //constructor(public navCtrl: NavController, private navParams: NavParams, private superTabsCtrl: SuperTabsController) {
		const type = navParams.get('type');
		switch (type) {
			case 'icons-only':
				this.showTitles = false;
				this.pageTitle += ' - Icons only';
				break;

			case 'titles-only':
				this.showIcons = false;
				this.pageTitle += ' - Titles only';
				break;
		}
	}

	ionViewDidEnter() {
		 this._backBtn.registerAction(() => {
		 	this._backBtn.doubleBackToExit();
		 }, 101);
	}

	ionViewWillLeave() {
		this._backBtn.deregisterAction();
	}

	ngAfterViewInit() {
		// this.superTabsCtrl.increaseBadge('page1', 10);
		// this.superTabsCtrl.enableTabSwipe('page3', false);
		// this.superTabsCtrl.enableTabsSwipe(false);
	}

	onTabSelect(tab: { index: number; id: string; }) {
		console.log(`Selected tab: `, tab);
	}

}
