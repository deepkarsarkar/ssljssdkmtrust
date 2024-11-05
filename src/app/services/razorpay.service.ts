import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  constructor() { }

  createOrder(amount: any, currency: string) {
    return new Promise((resolve, reject) => {
      const options = {
        key: environment.razorpayKey,
        amount: amount,   // Amount in paise
        currency: currency,
        name: 'Sri Sri Lakshmi Janardana & Sri Sri Dakshina Kali Mata Temple Trust',
        description: 'Test payment',
        handler: (response: any) => {
          resolve(response);
        },
        // prefill: {
        //   name: 'John Doe',
        //   email: 'john@example.com'
        // },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    });
  }
}
