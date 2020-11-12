import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { API_URL } from "../config";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";


function CheckoutForm(props) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    console.log("in checkout form", props);
    // Create PaymentIntent as soon as the page loads
    window
      .fetch(`${API_URL}/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wine: props.wine }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []/*, () => {
    props.history.push('/')
  }*/);
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      axios
        .post(
          `${API_URL}/updateWineBuyer`,
          { wine: props.wine },
          { withCredentials: true }
        )
        .then(() => {
          setError(null);
          setProcessing(false);
          setSucceeded(true);
          props.history.push('/profile')
        }/*, () => {
          props.history.push('/')
        }*/);
    }
  };
  return (
    <section className="checkoutbody">
      <div className="body">
        <div className="box">
          <div className="middlebox">
            <div>
              <div className="paymentbox" >
                <Card border="" style={{ width: "28rem" }}>
                  <Card.Header>{props.wine.name}</Card.Header>
                  <Card.Body>
                    <Card.Title><span>$</span>{props.wine.price}</Card.Title>
                    <Card.Text>
                      As soon as your payment will be proceed, we will notify the seller. 
                    </Card.Text>
                  </Card.Body>
                </Card>
                <p>
                  
                </p>
                Please, provide your payment information to process.
                <form
                  className="checkoutform"
                  id="payment-form"
                  onSubmit={handleSubmit}
                >
                  <CardElement
                    id="card-element"
                    options={cardStyle}
                    onChange={handleChange}
                  />
                  <button
                    disabled={processing || disabled || succeeded}
                    id="submit"
                  >
                    <span id="button-text">
                      {processing ? (
                        <div className="spinner" id="spinner"></div>
                      ) : (
                        "Pay"
                      )}
                    </span>
                  </button>
                  {/* Show any error that happens when processing the payment */}
                  {error && (
                    <div className="card-error" role="alert">
                      {error}
                    </div>
                  )}
                  {/* Show a success message upon completion */}
                  <p
                    className={
                      succeeded ? "result-message" : "result-message hidden"
                    }
                  >
                    Payment succeeded, see the result in your
                    <a href={`https://dashboard.stripe.com/test/payments`}>
                      {" "}
                      Stripe dashboard.
                    </a>{" "}
                    Refresh the page to pay again.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(CheckoutForm);
