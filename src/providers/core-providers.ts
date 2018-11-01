import { Injectable } from '@angular/core';

@Injectable()
export class CoreProviders {
	constructor() { }
	public baseUrl: string = 'https://jsonplaceholder.typicode.com';
}
