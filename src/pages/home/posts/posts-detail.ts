import { Component, OnInit } from '@angular/core';
import { App, NavController, NavParams, IonicPage } from 'ionic-angular';
import { PostsProviders } from "../../../providers/posts-providers";


@IonicPage()
@Component({
	selector: 'page-posts-detail',
	templateUrl: 'posts-detail.html',
    providers: [PostsProviders]
})
export class PostsDetailPage implements OnInit {
    id: string;
    post: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private postsProviders: PostsProviders) {
        this.id = this.navParams.get('id');
        this.post = {
          id: '',
          title: '',
          body: '',
          userId: '',
          comments_count: '',
          comments: []
        }
	}

	ngOnInit() {
		this.getPostsDetail();
        this.getPostComments();
	}

    getPostsDetail() {
        // this.postsProviders.getPostsDetail(this.id).subscribe(
		// 	data => {
		// 		this.post = data;
		// 	}
		// );
        //
        this.postsProviders.getPostsDetail(this.id).subscribe(
			data => {
				this.post = data;
			}
		);
    }

    getPostComments() {
        this.postsProviders.getPostComments(this.id).subscribe(
			data => {
				this.post.comments = data ;
                this.post.comments_count = data.length;
			}
		);
    }
}
