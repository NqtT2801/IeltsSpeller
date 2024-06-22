import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  choices: string[] = ['Name Spelling', 'A Number', 'Telephone', 'Code Spelling'];
  selectedChoice: string = ''; 
  answer: string = '';
  isVisible: boolean = false;

  constructor(private speechService: SpeechService) { }

  ngOnInit(): void {
    this.selectedChoice = this.choices[0];
    this.speechService.RandomName();
    this.answer = this.speechService.name;
  }
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  selectChoice(choice: string) {
    this.selectedChoice = choice;
    if (choice === "Name Spelling"){
      this.speechService.RandomName();
      this.answer = this.speechService.name;
      this.isVisible = false;
    }
    else if (choice === "A Number"){
      this.speechService.RandomNumber();
      this.answer = this.speechService.number;
      this.isVisible = false;
    }
    else if (choice === "Telephone"){
      this.speechService.RandomTelephone();
      this.answer = this.speechService.telephone;
      this.isVisible = false;
    }
    else {
      this.speechService.RandomCode();
      this.answer = this.speechService.code;
      this.isVisible = false;
    }
  }

  listen(){
    if (this.selectedChoice === "Name Spelling"){
      this.speechService.SpellName(this.speechService.name)
    }
    else if (this.selectedChoice === "A Number"){
      this.speechService.SpellNumber(this.speechService.number)
    }
    else if (this.selectedChoice === "Telephone"){
      this.speechService.SpellTelephone(this.speechService.telephone)
    }
    else {
      this.speechService.SpellCode(this.speechService.code)
    }
  }

  nextWord(){
    if (this.selectedChoice === "Name Spelling"){
      this.speechService.RandomName();
      this.answer = this.speechService.name;
      this.isVisible = false;
    }
    else if (this.selectedChoice === "A Number"){
      this.speechService.RandomNumber();
      this.answer = this.speechService.number;
      this.isVisible = false;
    }
    else if (this.selectedChoice === "Telephone"){
      this.speechService.RandomTelephone();
      this.answer = this.speechService.telephone;
      this.isVisible = false;
    }
    else {
      this.speechService.RandomCode();
      this.answer = this.speechService.code;
      this.isVisible = false;
    }
  }
}
