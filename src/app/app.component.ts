import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WordCrudService } from './service/word-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WordsApp';
  @ViewChild('myWord') word: ElementRef<HTMLInputElement>;

  words = [];

  constructor(private wordService: WordCrudService) {}

  ngOnInit(): void {
    this.words = this.wordService.getWords();
  }

  createWord(value: string) {
    console.log(value);
    this.wordService.createWord(value);
    if (this.word !== undefined) {
      this.word.nativeElement.value = '';
    }
  }
}
