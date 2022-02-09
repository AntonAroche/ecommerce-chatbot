import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  public userMessage: String = ''
  constructor() { }

  addMessage(msg: String) {
    this.userMessage = msg
  }
}
