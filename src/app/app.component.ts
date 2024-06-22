import { Component, OnInit } from '@angular/core';
import { SpeechService } from './services/speech.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private speechService: SpeechService) {}
  ngOnInit(): void {
  }
}
