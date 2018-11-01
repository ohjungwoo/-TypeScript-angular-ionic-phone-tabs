import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { HttpModule, JsonpModule  } from '@angular/http';
import { HardwareBackButtonService } from '../providers/backbutton';

import { CoreProviders } from "../providers/core-providers";

//원래 안해도 lazy loading 하던것
import {ContractDetailPage } from '../pages/contract-detail/contract-detail';
import {PostsDetailPage } from '../pages/home/posts/posts-detail';

@NgModule({
	declarations: [
		MyApp
		,ContractDetailPage
		,PostsDetailPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		JsonpModule,
		IonicModule.forRoot(MyApp),
		SuperTabsModule.forRoot()
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
		,ContractDetailPage
		,PostsDetailPage
	],
	providers: [
		SplashScreen,
		StatusBar,
		HardwareBackButtonService,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
		,CoreProviders
	]
})
export class AppModule { }
