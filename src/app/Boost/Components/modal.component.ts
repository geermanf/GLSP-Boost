import { Component, Input } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

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

            let url = '/restapi/v1/comprar';
            let body = {
                    email: this.email,
                    invocador: this.invocador,
                    usuario: this.usuario,
                    pwd: this.pwd,
                    servidor: this.servidor,
                    comentario: this.comentario
                };
            let headers = new Headers();
            headers.set('Authorization', 'asd123');
            let options = new RequestOptions({ headers: headers });

            this.http.post(url, body, options).subscribe();


        } else {
            this.error = 'Por favor ingrese los campos requeridos';
        }

    }
}
