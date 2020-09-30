import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trade } from '../../../models/Trade';
@Component({
  selector: 'app-addpanel',
  templateUrl: './addpanel.component.html',
  styleUrls: ['./addpanel.component.css']
})
export class AddpanelComponent implements OnInit {
  newTrade: FormGroup;
  @Output() addTrade: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newTrade = this.fb.group({
      timestamp: '',
      type: '',
      securityType: '',
      securityName: '',
      quantity: [null, [Validators.required, Validators.min(1)]],
      price: [null, [Validators.required, Validators.min(1)]],
      brokerName: '',
      traderName: ''
    });
    // this.newTrade.valueChanges.subscribe(console.log);
  }

  // function to show error if quantity is negative
  get quantity(): any {
    return this.newTrade.get('quantity');
  }
  get price(): any {
    return this.newTrade.get('price');
  }

  // Function to get value of new trade data entered by user
  // works on form submit
  getNewTrade(): void {
    let trade = this.newTrade.value;
    trade.timestamp = `2020-10-05T${trade.timestamp}.000+00:00`;
    console.log('called', trade);
    this.addTrade.emit(trade);
    this.resetForm(this.newTrade);
  }

  // function to reset all form fields once new trade is addded by user
  resetForm(form: FormGroup): void {
    form.reset();

    Object.keys(form.controls).forEach(key => {
      form.get(key).setErrors(null);
    });
  }
}
