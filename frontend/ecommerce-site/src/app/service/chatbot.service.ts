import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';

export interface ChatbotResponse {
  intent: string;
  entity: string;
}

const httpOptions = {
  observe: 'body',
  responseType: 'text'
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor(private http: HttpClient) { }

  getResponse(msg: String) {
    const body = {
      user_input: msg
    }
    return this.http.post(`${environment.backendUrl}/Chatbot/`, body)
  }
}
