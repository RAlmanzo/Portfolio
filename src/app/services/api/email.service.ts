import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailData } from '../../models/emailData.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  contactUrl = `${environment.apiUrl}contacts`;

  constructor(private http: HttpClient) { }

  sendMessage(data: EmailData) {
     return this.http.post(this.contactUrl, data);
  }
}