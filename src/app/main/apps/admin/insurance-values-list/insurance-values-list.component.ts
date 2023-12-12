import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-insurance-values-list',
  templateUrl: './insurance-values-list.component.html',
  styleUrls: ['./insurance-values-list.component.scss']
})
export class InsuranceValuesListComponent implements OnInit {

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  fileName = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      this.fileName = file.name; //* Update the filename in the input text
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }
}
