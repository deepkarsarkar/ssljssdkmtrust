import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var Razorpay: any;

@Component({
  selector: 'app-donate-to-us',
  templateUrl: './donate-to-us.component.html',
  styleUrls: ['./donate-to-us.component.scss']
})
export class DonateToUsComponent {

  razorpayKey = environment.razorpayKey;

  constructor() {}

  makePayment(){
    const options = {
      key: this.razorpayKey,
      amount: 10000,
      name: 'Dummy Donor',
      description: 'Test payment',
      handler: (response: any) => {
        console.log(response);
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com'
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#F37254'
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
}
