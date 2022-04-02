import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordCrudService {
  constructor() {}

  words = [];

  getWords() {
    return this.words;
  }

  createWord(word: string) {
    this.words.push(word);
  }
}
