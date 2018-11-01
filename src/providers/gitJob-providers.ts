import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


//https://jobs.github.com/positions?description=full+time&location=
@Injectable()
export class GitJobProviders {
    data: any;
    callback: string  = 'JSONP_CALLBACK';

    constructor(public http: Http, public jsonp: Jsonp, private navParams: NavParams) {
    }

    // getJobList() {
    // 	if (this.data) {
    // 		return Promise.resolve(this.data);
    // 	}
    // 	// Dont have the data yet
    // 	return new Promise(resolve => {
    //         this.jsonp.get('https://jobs.github.com/positions.json?description='+this.description+'&location='+this.location+'&callback='+this.callback)
    // 		.map(res => res.json())
    //         //.do(res => console.log('All: ' +  JSON.stringify(res)))
    // 		.subscribe(data => {
    // 			this.data = data;
    // 			resolve(this.data);
    // 		});
    // 	});
    // }

    getJobListSearch(description: string='', location: string='', page:number=0) {
    	return new Promise(resolve => {
            this.jsonp.get('https://jobs.github.com/positions.json?description='+description+'&location='+location+'&callback='+this.callback+'&page='+page)
    		.map(res => res.json())
            //.do(res => console.log('getJobListSearch: ' +  JSON.stringify(res)))
    		.subscribe(data => {
    			this.data = data;
    			resolve(this.data);
    		});
    	});
    }
}
