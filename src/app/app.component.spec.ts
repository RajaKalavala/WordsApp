import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WordCrudService } from './service/word-crud.service';

let component: AppComponent;
let service: WordCrudService;
let fixture: ComponentFixture<AppComponent>;

const MockWordCrudService = jasmine.createSpyObj('WordCrudService', [
  'createWord',
  'getWords',
]);

function configureTestBed(): void {
  TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    declarations: [AppComponent],
    providers: [{ provide: WordCrudService, useValue: MockWordCrudService }],
  }).compileComponents();
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
  service = TestBed.inject(WordCrudService);
}

describe('AppComponent', (): void => {
  beforeEach(() => {
    configureTestBed();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'WordsApp'`, () => {
    expect(component.title).toEqual('WordsApp');
  });

  it(`should call create operation of service on Create button click`, () => {
    let word = 'Amazing';
    component.createWord(word);
    expect(service.createWord).toHaveBeenCalledWith(word);
  });

  it(`should call get operation of service on ngOnInit()`, () => {
    fixture.detectChanges();
    expect(service.getWords).toHaveBeenCalled();
  });
});
