import { Component, ElementRef, ViewChild } from '@angular/core';
import { WordCrudService } from './service/word-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WordsApp';
  @ViewChild('myWord') word: ElementRef<HTMLInputElement>;

  constructor(private wordService: WordCrudService) {}

  createWord(value: string) {
    console.log(value);
    this.wordService.createWord(value);
    if (this.word !== undefined) {
      this.word.nativeElement.value = '';
    }
  }
}
