import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'comprar-boost',
    templateUrl: 'comprar.component.html'
})

export class ComprarComponent implements OnInit {
    email: string = '';
    invocador: string = '';
    usuario: string = '';
    pwd: string = '';
    servidor: string = '';
    comentario: string = '';

    error: string = '';


    constructor(private http: Http) { }

    ngOnInit() { }

    comprar() {  // OPCION 1, FORUMARIO SIMPLE (ERROR DE CORS)
        let url = 'https://sandbox.gateway.payulatam.com/ppp-web-gateway/';
        let body = {
        };

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions( { headers: headers });

        this.http.post(url, body, options).subscribe();
    }
}
