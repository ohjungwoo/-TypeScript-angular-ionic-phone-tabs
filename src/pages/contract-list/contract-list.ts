import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams, ToastController, IonicPage} from 'ionic-angular';

import {ContractDetailPage } from '../contract-detail/contract-detail';

import { ContractProviders } from '../../providers/contract-providers';

import 'rxjs/add/operator/debounceTime';


@IonicPage()
@Component({
	selector: 'page-contract-list',
	templateUrl: 'contract-list.html',
	providers: [ContractProviders]
})
export class ContractListPage {
	public people: any;

	searchTerm: string = '';
	searchControl: FormControl;
	searching: any = false;


	constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public contractProviders: ContractProviders) {
		this.searchControl = new FormControl();
	}

	ionViewDidLoad() {
		this.contractFindAll();

		this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
			this.searching = false;
			this.contractFindAll();
		});
	}

	contractFindAll() {
		this.contractProviders.contractFindAll()
			.then(data => { this.people = data; })
			.then(() => this.people = this.filterItems(this.searchTerm));
	}

	filterItems(searchTerm) {
		return this.people.filter((item) => {
			return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
		});
	}

	onSearchInput() {
		this.searching = true;
	}
	/*
	  contractFindAll() {
		this.contractProviders.contractFindAll()
		  .then(data => {
			this.people = data;
		  });
	  }*/

	itemTapped(event, person) {
		this.navCtrl.push(ContractDetailPage, {
			person: person
		});
	}

	onLongPress(event, person) {
		var call = "tel:" + person.mobilePhone;
		this.msgToast(call, 3000);
		//setTimeout => document.location.href = call, 1000
		setTimeout(() => document.location.href = call, 1500)
	}

	msgToast(message, duration) {
		let toast = this.toastCtrl.create({
			message: message,
			duration: duration
		});
		toast.present();
	}
}
