import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsDetailPage } from "./posts-detail";

@NgModule({
	declarations: [
		PostsDetailPage
	],
	imports: [
		IonicPageModule.forChild(PostsDetailPage)
	]
})
export class Module { }
