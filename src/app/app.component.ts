import { Component } from '@angular/core';
import { WordCrudService } from './service/word-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private wordService: WordCrudService) {}

  title = 'WordsApp';
  words = [];

  createWord(word: string) {
    this.wordService.createWord(word);
  }
}
