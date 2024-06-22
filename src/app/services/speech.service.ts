import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  choices: string[] = ['Name Spelling', 'A Number', 'Telephone', 'Code Spelling'];

  name!: string;
  number!: string;
  telephone!: string;
  code!: string;
  synth = window.speechSynthesis;

  Speak(text: string, rate: number) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    this.synth.speak(utterance);
  }

  SpellName(word:string) {
    let result = word.split('').map(char => {
      if (char === " ") {
        return char + ",";
      } else {
        return char + ". ";
      }
    });
    this.Speak(result.join(''), 0.7);
  }

  SpellNumber(randomNumber:string) {
    this.Speak(randomNumber, 1.2);
  }

  SpellTelephone(telephone:string) {
    let result = telephone.split('').map(number => {
      if (number === " ") {
        return number + ".";
      } else {
        return number;
      }
    });
    this.Speak(result.join(' '), 1);
  }

  SpellCode(code:string){
    this.Speak(code.split('').map(char => char + " ").join(''), 0.9);
  }

  
  RandomName(){
    var nameDictionary = [
      "John Smith",
      "Sarah Johnson",
      "Michael Williams",
      "Emily Brown",
      "David Jones",
      "Jessica Davis",
      "James Miller",
      "Jennifer Wilson",
      "Robert Taylor",
      "Emma Moore",
      "William Anderson",
      "Olivia Thomas",
      "Daniel Jackson",
      "Elizabeth White",
      "Matthew Harris",
      "Sophia Martin",
      "Christopher Thompson",
      "Ava Garcia",
      "Joseph Martinez",
      "Isabella Robinson",
      "Andrew Clark",
      "Mia Rodriguez",
      "Joshua Lewis",
      "Charlotte Walker",
      "Samuel Hall",
      "Madison Young",
      "Benjamin Lee",
      "Abigail Scott",
      "Ryan King",
      "Grace Green",
      "Jonathan Hill",
      "Lily Adams",
      "Nicholas Baker",
      "Avery Nelson",
      "Tyler Carter",
      "Zoey Mitchell",
      "Christian Perez",
      "Ella Rivera",
      "Gabriel Sanchez",
      "Savannah Murphy",
      "Logan Cooper",
      "Victoria Reed",
      "Jackson Ross",
      "Hannah Campbell",
      "Ethan Price",
      "Addison Bell",
      "Christopher Wood",
      "Natalie Ward",
      "Isaac Brooks",
      "Aaliyah Torres",
      "Dylan Watson",
      "Jasmine Ramirez",
      "Gavin Peterson",
      "Brooklyn Foster",
      "Luke Gray",
      "Zoey Brooks",
      "Jack Coleman",
      "Aria Washington",
      "Caleb Kelly",
      "Eva Bennett",
      "Owen Howard",
      "Stella Long",
      "Isaac Roberts",
      "Ruby Foster",
      "Nathan Coleman",
      "Sadie Richardson",
      "Dominic Mitchell",
      "Elena Jenkins",
      "Julian Russell",
      "Claire Adams",
      "Chase Griffin",
      "Naomi Baker",
      "Jason Murphy",
      "Skylar Price",
      "Tristan Hayes",
      "Maya Barnes",
      "Carter Turner",
      "Isabelle Scott",
      "Levi Ward",
      "Layla Foster",
      "Lucas Cooper",
      "Audrey Parker",
      "Hunter Reed",
      "Paisley Wright",
      "Grayson Rogers",
      "Penelope Brooks",
      "Lincoln Stewart",
      "Madeline Simmons",
      "Jordan Rivera",
      "Ellie Collins",
      "Sebastian Hughes",
      "Caroline Young",
      "Xavier Mitchell",
      "Leah King",
      "Cooper Morgan",
      "Gabriella Wright",
      "Blake Thompson",
      "Kaylee Hill",
      "Henry Coleman",
      "Violet Hamilton"
    ]
    this.name = nameDictionary[Math.floor(Math.random() * nameDictionary.length)];
  }

  RandomNumber(){
    let randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    this.number = randomNumber.toString();
  }

  RandomTelephone(){
    // Generate random numbers for each group
    let num1 = Math.floor(Math.random() * 10000); // Random number between 0 and 9999
    let num2 = Math.floor(Math.random() * 10000);
    let num3 = Math.floor(Math.random() * 10000);

    // Format each number to ensure it has four digits
    let formattedNum1 = num1.toString().padStart(4, '0'); // Ensure four digits
    let formattedNum2 = num2.toString().padStart(4, '0');
    let formattedNum3 = num3.toString().padStart(4, '0');

    // Return the formatted random number
    this.telephone = `${formattedNum1} ${formattedNum2} ${formattedNum3}`;
  }

  RandomCode(){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.code = result;
  }
}