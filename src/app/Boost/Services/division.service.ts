import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Division } from '../Model/division';

@Injectable()
export class DivisionService {

    constructor(private http: Http) {}

        getDivisions() {
            return this.http.get('./data/divisiones.json')
                        .toPromise()
                        .then(res => <Division[]> res.json().data)
                        .then(data => { return data; });
        }
}
