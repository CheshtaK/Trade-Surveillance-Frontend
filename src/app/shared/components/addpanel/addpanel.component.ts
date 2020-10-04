import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpanel',
  templateUrl: './addpanel.component.html',
  styleUrls: ['./addpanel.component.css']
})

export class AddpanelComponent implements OnInit {

  // new trade fetched from the html form
  newTrade: FormGroup;

  // emit add trade event
  @Output() addTrade: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
    // initialize new trade
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
  }

  // function to show error if quantity is negative
  get quantity(): any {
    return this.newTrade.get('quantity');
  }

  // function to show error if price is negative
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
