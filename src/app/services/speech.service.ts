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
    utterance.lang = 'en-US';
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
    this.Speak(result.join(''), 0.6);
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
    this.Speak(result.join(' '), 0.9);
  }

  SpellCode(code:string){
    this.Speak(code.split('').map(char => char + " ").join('').replace(/A/g, "A."), 0.6);
  }

  
  RandomName(){
    var nameDictionary = [
      "James Smith", "John Johnson", "Robert Williams", "Michael Brown", "William Jones", 
      "David Miller", "Richard Davis", "Joseph Garcia", "Charles Rodriguez", "Thomas Wilson", 
      "Christopher Martinez", "Daniel Anderson", "Matthew Taylor", "Anthony Thomas", "Donald Hernandez", 
      "Mark Moore", "Paul Martin", "Steven Jackson", "Andrew Thompson", "Kenneth White", 
      "Joshua Lopez", "George Lee", "Kevin Gonzalez", "Brian Harris", "Edward Clark", 
      "Ronald Lewis", "Timothy Robinson", "Jason Walker", "Jeffrey Perez", "Ryan Hall", 
      "Jacob Young", "Gary Allen", "Nicholas Sanchez", "Eric Wright", "Stephen Hill", 
      "Jonathan Scott", "Larry Green", "Justin Baker", "Scott Adams", "Brandon Nelson", 
      "Benjamin Carter", "Samuel Mitchell", "Gregory Perez", "Frank Roberts", "Alexander Turner", 
      "Raymond Phillips", "Patrick Campbell", "Jack Parker", "Dennis Evans", "Jerry Edwards", 
      "Tyler Collins", "Aaron Stewart", "Jose Morris", "Henry Rogers", "Adam Reed", 
      "Douglas Cook", "Nathan Morgan", "Peter Bell", "Zachary Murphy", "Kyle Rivera", 
      "Walter Cooper", "Harold Richardson", "Jeremy Cox", "Ethan Howard", "Carl Ward", 
      "Keith Torres", "Roger Peterson", "Gerald Gray", "Christian Ramirez", "Terry James", 
      "Sean Watson", "Arthur Brooks", "Austin Kelly", "Noah Sanders", "Lawrence Price", 
      "Jesse Bennett", "Joe Wood", "Bryan Barnes", "Billy Ross", "Jordan Henderson", 
      "Albert Coleman", "Dylan Jenkins", "Bruce Perry", "Willie Powell", "Gabriel Long", 
      "Alan Patterson", "Juan Hughes", "Logan Flores", "Wayne Washington", "Ralph Butler", 
      "Roy Simmons", "Eugene Foster", "Randy Gonzales", "Vincent Bryant", "Russell Alexander", 
      "Louis Russell", "Philip Griffin", "Bobby Diaz", "Johnny Hayes", "Bradley Myers", 
      "Martin Ford", "Craig Hamilton", "Stanley Graham", "Leonard Sullivan", "Calvin Wallace", 
      "Frederick Oliver", "Elijah Montgomery", "Isaac Herrera", "Derek Gibson", "Dan Chapman", 
      "Keith Gonzalez", "Trevor Stephens", "Oliver Barker", "Gavin George", "Lucas Cunningham", 
      "Peter Bates", "Oscar Flynn", "Maxwell Reid", "Charlie Newman", "Simon Lawson", 
      "Theodore Bishop", "Harrison Sullivan", "Edgar Matthews", "Owen Wheeler", "Elias Ramirez", 
      "Finn Alvarez", "Miles Watkins", "Jasper Carlson", "Silas Harper", "Emmett Page", 
      "Wesley Fuller", "Caleb Lynch", "Leo Dean", "Colin Henderson", "Ezra Burgess", 
      "Axel Caldwell", "Damian Blake", "Sebastian Ball", "Ezekiel McBride", "Arthur Morton", 
      "Tobias Vaughan", "Felix Pruitt", "Hugo Small", "Luke Warner", "Kai Morton", 
      "Dante Norman", "Gideon Waters", "Jude Lambert", "Kieran Jacobs", "Landon Abbott", 
      "Nico Parks", "Orion Chambers", "Quinn Clayton", "Rhys Pena", "Soren Becker", 
      "Xavier Yates", "Zane Holloway", "Atticus Saunders", "Beckett Duffy", "Cassius Bartlett", 
      "Dean Valentine", "Elliot Pitts", "Griffin Rollins", "Holden Roberson", "Jonah Calderon", 
      "Milo Roth", "Roman Knox", "Rowan Garrison", "Sawyer McIntyre", "Theo Herman", 
      "Weston Sandoval", "Zander Buckner", "Abigail Reynolds", "Alexis Pierce", "Alice Walters", 
      "Alyssa Fuller", "Amber Bridges", "Amy Holland", "Angela Hutchinson", "Anna Cannon", 
      "Annie Sawyer", "Ashley Dixon", "Audrey Castro", "Bella Warner", "Bethany Hopkins", 
      "Brianna Carpenter", "Brooke Nichols", "Catherine Glover", "Charlotte Mason", "Chelsea Pratt", 
      "Chloe Barnett", "Claire Kennedy", "Danielle Warren", "Diana Hopkins", "Elizabeth Palmer", 
      "Emily Matthews", "Emma Fox", "Erica Reed", "Eva Rose", "Gabrielle Dixon", 
      "Hailey Stone", "Hannah Buchanan", "Isabella Doyle", "Jasmine Schultz", "Jennifer Blake", 
      "Jessica Norman", "Jillian Marsh", "Julia Riley", "Kaitlyn Wheeler", "Katherine Lawrence", 
      "Kayla Stanley", "Lauren Hayes", "Leah Hudson", "Lily Goodwin", "Madison Bishop", 
      "Megan Chambers", "Melissa Pratt", "Michelle Mendoza", "Natalie Perkins", "Olivia Pierce", 
      "Paige Andrews", "Rachel Curtis", "Rebecca Sullivan", "Samantha Weaver", "Sarah Gonzalez", 
      "Savannah Elliott", "Sophia Fletcher", "Stephanie Erickson", "Sydney Sutton", "Taylor Oliver", 
      "Vanessa Rose", "Victoria Hopkins", "Whitney Grant", "Zoe Barnett"
    ]
    this.name = nameDictionary[Math.floor(Math.random() * nameDictionary.length)];
  }

  RandomNumber(){
    let result = 0;
   // Generate a random number between 0 and 1
    const random = Math.random();

    if (random < 0.35) {
      // 35% chance for numbers from 13 to 19
      result = Math.floor(Math.random() * 7) + 13; // Random number between 13 and 19
    } else if (random < 0.7) {
      // 35% chance for numbers with 0 at the end
      result = Math.floor(Math.random() * 8 + 2) * 10; // Random multiple of 10 between 0 and 80
    } else {
      // 30% chance for the rest (20 to 99 excluding numbers with 0 at the end and 13 to 19)
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * 80) + 20;
      } while (randomNumber % 10 === 0); // Repeat until randomNumber is not ending in 0
      result = randomNumber;
    }
    this.number = result.toString();
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