import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import './payment-form.styles.scss';
import { useState, useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import SpinnerButton from "../SpinnerButton/spinner-button.component";

const PaymentForm = () => {
    const { cartTotal } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);
    const [ isProcessing, setIsProcessing ] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ amount: cartTotal * 100 })
        }).then(res => res.json())
        
        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest'
                }
            }
        })

        setIsProcessing(false);

        if (paymentResult.error) {
            alert(paymentResult.error)
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment successful!')
            }
        }
    }

    return (
        <>
        <div className='payment-form-container'>
            <form onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <button disabled={isProcessing}>{isProcessing ? <SpinnerButton /> : 'Pay Now'}</button>
            </form>
        </div>
        <div className='test-card-container'>
            <span>Test Card</span>
            <p><span>Card Number:</span> 4242 4242 4242 4242</p>
            <p><span>Exp Date:</span> 04/24</p>
            <p><span>CVC:</span> 242</p>
            <p><span>Zip:</span> 42424</p>
        </div>
        </>
    )
}

export default PaymentForm;