import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import "rxjs/add/operator/map";

import {ChannelService, ChannelConfig, SignalrWindow} from "./channel.service";

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

let channelConfig = new ChannelConfig();  
channelConfig.url = "http://localhost:9123/signalr";  
channelConfig.hubName = "EventHub";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ChannelService, 
    { provide: SignalrWindow, useValue: window },
    { provide: 'channel.config', useValue: channelConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
