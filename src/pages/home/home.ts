import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 calculatorForm: FormGroup;
 result: number;
 @ViewChild('result') resultOutput: ElementRef;

  constructor(
    public navCtrl: NavController,
    public viewController: ViewController,
    private formBuilder: FormBuilder,
  ) {
    this.calculatorForm = this.formBuilder.group({
      firstValue: ['', Validators.required],
      secondValue: ['', Validators.required],
    });
  }

  addValues() {
    console.log(this.calculatorForm.value);
    const data = this.calculatorForm.value,
      firstNum = +data.firstValue, secondNum = +data.secondValue;

    this.resultOutput.nativeElement.textContent = firstNum + secondNum;
  }

}
