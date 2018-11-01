import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
Generated class for the PeopleSearch provider.
See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TvingFreeProviders {
    data: any;

    constructor(public http: Http, public jsonp: Jsonp) {
    	//console.log('Hello ContractProviders Provider');
    }

    getClipList() {
    	if (this.data) {
    		return Promise.resolve(this.data);
    	}
    	// Dont have the data yet
    	return new Promise(resolve => {
    		this.jsonp.get('http://apiqc.tving.com/v1/media/clips?pageNo=1&pageSize=2&order=new&adult=all&free=all&guest=all&scope=all&serviceOpenStartDate=&serviceOpenEndDate=&vodCode=E001229516&screenCode=CSSD0100&networkCode=CSND0900&osCode=CSOD0900&teleCode=CSCD0900&apiKey=1e7952d0917d6aab1f0293a063697610')
            //    this.jsonp.get('https://jobs.github.com/positions.json?description=python&location=new+york&callback=JSONP_CALLBACK')

    		//.map(res => res.json())
            //.do(res => console.log('All: ' +  JSON.stringify(res)))
    		.subscribe(data => {
                console.log('subscribe' + JSON.stringify(data));
                //console.log('--------------------data.json');
                //console.log(data.json());

    			this.data = data;
    			resolve(this.data);

                ///(this.data).forEach((index, data) =>  console.log('index ' + index) );
    		});
    	});
    }



}
