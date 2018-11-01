import { Component, OnInit } from '@angular/core';
import { App, NavController, NavParams, IonicPage } from 'ionic-angular';
import { PostsProviders } from "../../../providers/posts-providers";

import { PostsDetailPage } from './posts-detail';

@IonicPage()
@Component({
	selector: 'page-posts',
	templateUrl: 'posts.html'
    ,providers: [PostsProviders]
})
export class PostsPage {

    posts: any[];
    postsCount: number;
    params: any;

    constructor(private appCtrl: App, private navCtrl: NavController, private navParams: NavParams, private postsProviders: PostsProviders) {
        console.log('1-constructor');

        this.params = {
			_page: 1,
			_limit: 20
        }
	}

    ionViewDidLoad() {
        console.log('3-ionViewDidLoad');
    }

	ngOnInit() {
		console.log('2-ngOnInit');
        this.getPosts();
	}

    getPosts() {
        this.postsProviders.getPosts(this.params).subscribe(
			(data) => {
                this.posts = data;
                this.postsCount = data.length;
                console.log(this.postsCount + ' : length');
			}
		)
    }

    openPage(id : string){
        this.appCtrl.getRootNav().push(PostsDetailPage, { id: id });
    }

    doRefresh(refresher) {
        this.params._page = 1;
        setTimeout(() => {
			this.postsProviders.getPosts(this.params).subscribe(
				data => {
					this.posts = data;
					refresher.complete();
				}
			);
        }, 2000);
	}

	doInfinite(infiniteScroll) {
		this.params._page++;
		setTimeout(() => {
			this.postsProviders.getPosts(this.params).subscribe(
				data => {
					if (data) {
						this.posts.push(...data);
						infiniteScroll.complete();
					}
					else {
						infiniteScroll.enable(false);
					}
				}
			);
		}, 500);
	}
}
