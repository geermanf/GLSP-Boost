import { Component } from '@angular/core';
import { AppService, IMessage } from '../Services/contacto.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['../../../assets/css/estructura.css', '../../../assets/css/estilos.css']
})
export class ContactComponent {
  message: IMessage = {};

  constructor(private appService: AppService) {

  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message);
  }
}