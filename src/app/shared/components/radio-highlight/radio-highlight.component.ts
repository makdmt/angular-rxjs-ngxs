import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-radio-highlight',
  templateUrl: './radio-highlight.component.html',
  styleUrl: './radio-highlight.component.css'
})
export class RadioHighlightComponent implements OnInit {

  constructor() {}

  public colors = ['green', 'yellow', 'cyan', 'red'];
  private initValue = 'red'

  public colorsForm = new FormGroup({
    selectedColor: new FormControl(this.initValue),
  });

  public selectedColor$ = this.colorsForm.valueChanges.pipe(
    map(value => value.selectedColor),
    startWith(this.initValue)
  );


  ngOnInit(): void {
    // this.selectedColor$.subscribe(console.log);


    // this.colorsForm.controls['cyanSelect'].
    // for (let control in this.colorsForm.controls) {
    //   if (this.colorsForm.controls[control])

    // }
  }


}
