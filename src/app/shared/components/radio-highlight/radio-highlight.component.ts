import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, map, startWith, takeUntil, tap } from 'rxjs';
import { SetColor } from '../../store/shared.actions';
import { SharedSelectors } from '../../store/shared.selectors';

@Component({
  selector: 'app-radio-highlight',
  templateUrl: './radio-highlight.component.html',
  styleUrl: './radio-highlight.component.css'
})
export class RadioHighlightComponent implements OnInit, OnDestroy {

  constructor(private store: Store) { }

  public colors = ['green', 'yellow', 'cyan', 'red'];

  @Select(SharedSelectors.color)
  public selectedColor$!: Observable<string>;

  public colorsForm = new FormGroup({
    selectedColor: new FormControl(),
  });

  private readonly destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.colorsForm.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(value => value?.selectedColor && this.store.dispatch(new SetColor(value.selectedColor)))

    this.selectedColor$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(color => this.colorsForm.controls.selectedColor.setValue(color));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
