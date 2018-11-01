import {Component, ViewChild} from '@angular/core';
import { Nav, Platform, ToastController  } from 'ionic-angular';

//import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {

	@ViewChild(Nav) nav: Nav;

	rootPage: any;
	rootParams: any;

	menuItems: any[] = [
		{
			name: '홈',
			page: 'HomePage',
			params: { type: 'all' }
		},
		{
			name: '연락처',
			page: 'ContractListPage',
			params: { type: 'titles-only' }
		},
		{
			name: 'GitJob',
			page: 'GitJobListPage',
			params: { type: 'titles-only' }
		},
		{
			name: '리스트-예제',
			page: 'ListPage',
			params: { type: 'icons-only' }
		}
	];

	constructor(public platform: Platform, splashScreen: SplashScreen, statusBar: StatusBar, public toastCtrl: ToastController) {
		this.rootPage = this.menuItems[0].page;
		this.rootParams = this.menuItems[0].params;
		platform.ready().then(() => {
			splashScreen.hide();
			statusBar.backgroundColorByHexString('#3949AB');
		});
	}

	openPage(page) {
		this.nav.setRoot(page.page, page.params);
	}

}
