import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';

// interface CheckoutForm {
//   customer: {
//     firstName: string;
//     lastName: string;
//     email: string;
//   };
//   shippingAddress: {
//     street: string;
//     city: string;
//     state: string;
//     country: string;
//     zipCode: string;
//   };
//   billingAddress: {
//     street: string;
//     city: string;
//     state: string;
//     country: string;
//     zipCode: string;
//   };
//   creditCard: {
//     cardType: string;
//     nameOnCard: string;
//     cardNumber: string;
//     securityCode: string;
//     expirationMonth: string;
//     expirationYear: string;
//   };
// }

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup!: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      })
    });
  }

  copyShippingAddressToBillingAddress(event: any) {

    if (event.target.checked) {
      this.checkoutFormGroup.controls['billingAddress']
        .setValue(this.checkoutFormGroup.controls['shippingAddress'].value);
    } else {
      this.checkoutFormGroup.controls['billingAddress'].reset();
    }

  }

  onSubmit() {
    console.log("Handling the submit button");
    // console.log(this.checkoutFormGroup.get('customer').value);
    // console.log("The email address is " + this.checkoutFormGroup.get('customer').value.email);
  }
}
