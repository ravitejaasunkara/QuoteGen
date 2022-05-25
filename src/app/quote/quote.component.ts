import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  username='';
  constructor() { }

  ngOnInit(): void {
    this.username = localStorage.getItem('name')!;
  }
  quoteNum = 0;
  quoteList = [
    'The most important kind of freedom is to be what you really are. You trade in your reality for a role. You trade in your sense for an act. You give up your ability to feel, and in exchange, put on a mask. There can’t be any large-scale revolution until there’s a personal revolution, on an individual level. It’s got to happen inside first. ~Jim Morrison',
    'For a seed to achieve its greatest expression, it must come completely undone. The shell cracks, its insides come out and everything changes. To someone who doesn’t understand growth, it would look like complete destruction  - Cynthia Occelli',
    'First forget inspiration. Habit is more dependable. Habit will sustain you whether you are inspired or not. Habit will help you finish and polish your stories. Inspiration wont. Habit is persistence in practice  -  Octavia Butler.',
    '“Someone will declare, “I am the leader!” and expect everyone to get in line and follow him or her to the gates of heaven or hell. My experience is that it doesn’t happen that way. Others follow you based on the quality of your actions rather than the magnitude of your declarations.” ―Bill Walsh',
    'Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan `Press` On has solved and always will solve the problems of the human race. —Calvin Coolidge',
    '“Doubt is a killer. You just have to know who you are and what you stand for.” —Jennifer Lopez',
    ' “I learned a long time ago that there is something worse than missing the goal, and that’s not pulling the trigger.” —Mia Hamm',
    '“It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent.” —Charlie Munger',
    '“Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it… Once you learn that, you will never be the same again.” —Steve Jobs',
    '“Do not stop thinking of life as an adventure. You have no security unless you can live bravely, excitingly, imaginatively; unless you can choose a challenge instead of competence.” ―Eleanor Roosevelt'
  ];
  nextQuote(){
    this.quoteNum = Math.floor((Math.random()*10));
    //console.log(this.quoteList[this.quoteNum])
  }

}
