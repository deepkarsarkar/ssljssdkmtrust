import { Component } from '@angular/core';
import { RazorpayService } from 'src/app/services/razorpay.service';
import { environment } from 'src/environments/environment';

declare var Razorpay: any;

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent {

  // razorpayKey = environment.razorpayKey;

  // constructor() {}

  // makePayment(){
  //   const options = {
  //     key: this.razorpayKey,
  //     amount: 10000,
  //     name: 'Dummy Donor',
  //     description: 'Test payment',
  //     handler: (response: any) => {
  //       console.log(response);
  //     },
  //     prefill: {
  //       name: 'John Doe',
  //       email: 'john@example.com'
  //     },
  //     notes: {
  //       address: 'Razorpay Corporate Office'
  //     },
  //     theme: {
  //       color: '#F37254'
  //     }
  //   };

  //   const rzp = new Razorpay(options);
  //   rzp.open();
  // }

  constructor(private razorpayService: RazorpayService) { }

  initiatePayment() {
    this.razorpayService.createOrder('100', 'INR')
      .then((response) => {
        console.log('Payment successful:', response);
        // Handle success
      })
      .catch((error) => {
        console.error('Payment error:', error);
        // Handle error
      });
  }

}
