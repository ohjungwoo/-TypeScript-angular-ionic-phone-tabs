import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams, ToastController, IonicPage, InfiniteScroll} from 'ionic-angular';
import { GitJobProviders } from '../../providers/gitJob-providers';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
	selector: 'page-gitJob-list',
	templateUrl: 'gitJob-list.html',
	providers: [GitJobProviders]
})

export class GitJobListPage {
	public items: any;

	public lastPageReached: boolean = false;
	public searchPage: number = 0;

	//input
	searchCondition = {
		location: 'new york',
		description: 'full time'
	};

	constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public gitJobProviders: GitJobProviders) {
	}

	ionViewDidLoad() {
		this.onSearchCondition();
	}
	onSearchCondition() {
		this.lastPageReached = false;
		this.searchPage = 0;
		this.gitJobProviders.getJobListSearch(this.searchCondition.description, this.searchCondition.location, this.searchPage)
			.then(data => {
			this.items = data;
				if (Object.keys(data).length === 0) {
					this.msgToast('데이터가 없습니다.', 3000);
				}
			});
	}

	findNext(infiniteScroll: InfiniteScroll) {
		this.find().then(() => {
			infiniteScroll.complete();
		});
	}

	isLastPageReached(): boolean {
		return this.lastPageReached;
	}

	find(): Promise<any> {
		console.log('Begin async operation');

		return new Promise((resolve) => {
			this.gitJobProviders.getJobListSearch(this.searchCondition.description, this.searchCondition.location, this.searchPage)
				.then(data => {
					this.items = this.items.concat(data);
					console.log('Async operation has ended >> length : ' + Object.keys(data).length);

					//if (Utils.Comparator.isEmpty(resultsA) || resultsA.length < 10) {
					if (Object.keys(data).length === 0) {
						//console.log('data == null');
						this.lastPageReached = true;
					} else {
						this.searchPage++;
						//console.log('!!! data == null');
					}
					resolve();
				}, (errorResponse: Response) => {
					// Nothing found
					this.lastPageReached = true;
					resolve();
				});
		});
	}

	msgToast(message, duration) {
		let toast = this.toastCtrl.create({
			message: message,
			duration: duration
		});
		toast.present();
	}
}
