import { Component, Input } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
let submit = require('./submit.js');

@Component({
    selector: 'form-modal',
    templateUrl: 'modal.component.html'
})

export class ModalComponent {
    @Input() tipo: string;
    @Input() costo: number;
    @Input() current: string;
    @Input() desired: string;
    @Input() victorias: number;

    email: string = '';
    invocador: string = '';
    usuario: string = '';
    pwd: string = '';
    servidor: string = '';
    comentario: string = '';

    error: string = '';


    constructor(private http: Http) { }

    pagar() {


        if ((this.email !== '') && (this.invocador !== '') && (this.usuario !== '') && (this.pwd !== '') && (this.servidor !== '')) {
            this.error = '';

            // // OPCION 2 CON REST API (LINK EN URL)
            // let url = 'https://www.gslpboost.com/restapi/v1/comprar';
            // let body = {
            //         email: this.email,
            //         invocador: this.invocador,
            //         usuario: this.usuario,
            //         pwd: this.pwd,
            //         servidor: this.servidor,
            //         comentario: this.comentario
            //     };

            // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
            // let options = new RequestOptions( { headers: headers });

            // this.http.post(url, body, options).subscribe();

            submit.setForm(this.email, this.invocador, this.usuario, this.pwd, this.servidor, this.comentario, this.costo,
                 this.current, this.desired, this.victorias);
            submit.submitForm();

        } else {
            this.error = 'Por favor ingrese los campos requeridos';
        }

    }
}

