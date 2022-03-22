import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ChatbotService } from './service';
import { chatbot_response } from './helpers/dialogflow'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showFiller = false;
  title = 'ecommerce-site';
  config = {
    title: "Chatbot",
    subTitle: "Type your query into the chatbox for assistance"
  }

  @ViewChild('autoScroll', { static: true }) private myScrollContainer: ElementRef;
  messages = [];
  confirming = false;
  pendingMsg = ''
  userMessage = '';
  isModalActive = false;
  isBotActive = false;
  constructor(private chatbot: ChatbotService) { }


  showDialog() {
    this.isModalActive = true;
    let modal_t = document.getElementById('chat_modal');
    modal_t.classList.remove('hidden-chat');
    modal_t.classList.add('show-chat');
  }

  closeDialog() {
    this.isModalActive = false;
    let modal_t = document.getElementById('chat_modal');
    modal_t.classList.remove('show-chat');
    modal_t.classList.add('hidden-chat');
  }

  pushData() {
    if (this.userMessage.trim() != '') {
      const message = this.userMessage
      this.userMessage = '';
      this.messages.push({ type: 'user', message, });
      if (this.confirming === true) {
        if (message === 'y') {
          this.addServerResponse(this.pendingMsg)
        } else {
          this.addServerResponse('Sorry I do not understand, could you please reformulate?')
        }
        this.pendingMsg = ''
        this.confirming = false;
      } else {
        this.isBotActive = true;
        this.scrollToBottom();
        this.getResponse(message)
      }
    }
  }

  getResponse(message) {
    this.chatbot.getResponse(message).subscribe((data: any) => {
      const { intent, entity } = data
      if (intent === "Greeting") {
        this.addServerResponse("Hello!")
      } else {
        this.pendingMsg = chatbot_response(data.intent, data.entity)
        this.confirming = true;
        this.addServerResponse(`Would you like to talk about ${intent}? Answer by typing y or n`)
      }
    })
  }

  addServerResponse(serverResponse) {
    this.messages.push({ type: 'bot', message: serverResponse });
    this.isBotActive = false;
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      setTimeout(() => {
        this.myScrollContainer.nativeElement.scrollTop =
          32 + this.myScrollContainer.nativeElement.scrollHeight;
        this.myScrollContainer.nativeElement.scroll({
          top: this.myScrollContainer.nativeElement.scrollHeight,
          left: 0,
          behavior: 'smooth',
        });
      }, 100);
    } catch (err) { }
  }
}
