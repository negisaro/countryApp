import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'

})
export class ByCapitalPageComponent {

  @ViewChild('txtInput')
  input!: ElementRef<HTMLInputElement>;

  searchByCapital(term: string): void{

    console.log('desde');
    console.log({term})

  }

}
/*
 @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
*/
