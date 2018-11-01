import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
Generated class for the PeopleSearch provider.
See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ContractProviders {

    data: any;
    person: any;

    constructor(public http: Http) {
    	//console.log('Hello ContractProviders Provider');
    }

    contractFindAll() {
    	if (this.data) {
    		return Promise.resolve(this.data);
    	}
    	// Dont have the data yet
    	return new Promise(resolve => {
    		this.http.get('http://demo0494219.mockable.io/ionic2/t-contract/')
    		.map(res => res.json())
    		.subscribe(data => {
    			this.data = data.results;
    			resolve(this.data);
    		});
    	});
    }

    contractFindById(person) {
        console.log('person.id >>>>>>>>>>>>' + person.id);
        if (this.person) {
    		return Promise.resolve(this.person);
    	}
    	// Dont have the data yet
    	return new Promise(resolve => {
    		this.http.get('http://demo0494219.mockable.io/ionic2/t-contract/')
    		.map(res => res.json())
    		.subscribe(data => {
    			this.person = data.results[person.id-1];
    			resolve(this.person);
    		});
    	});
    }


}
