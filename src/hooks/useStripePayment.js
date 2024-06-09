import { useState, useEffect } from "react";
import { useAxiosSecure } from "@hooks/axios";
import { useStripe, useElements } from "@stripe/react-stripe-js";

const useStripePayment = (user, amount = 0, CardElement) => {
   const axiosSecure = useAxiosSecure();
   const stripe = useStripe();
   const elements = useElements();
   const [cardError, setCardError] = useState("");
   const [clientSecret, setClientSecret] = useState();
   const [isProcessing, setIsProcessing] = useState(false);

   useEffect(() => {
      document.body.classList.add("overflow-hidden");
      if (amount > 0) getClientSecret();
      return () => {
         document.body.classList.remove("overflow-hidden");
      };
   }, [amount]);

   const getClientSecret = async () => {
      try {
         const response = await axiosSecure.post("/payments/create-intent", { price: amount });
         if (response?.data?.clientSecret) setClientSecret(response.data.clientSecret);
      } catch (error) {
         console.log(error);
      }
   };

   const handleSubmit = (onSuccess) => async (e) => {
      e.preventDefault();
      setIsProcessing(true);

      if (!stripe || !elements) return;
      const card = elements.getElement(CardElement);

      if (card == null) return;
      const { error } = await stripe.createPaymentMethod({ type: "card", card });
      setCardError(error ? error.message : "");

      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
         payment_method: { card: card, billing_details: { name: user.name, email: user.email } },
      });

      if (confirmError) {
         console.log(confirmError);
         setCardError(confirmError.message);
         setIsProcessing(false);
         return;
      }

      if (paymentIntent.status === "succeeded") {
         setIsProcessing(false);
         onSuccess({
            transactionId: paymentIntent?.id,
            amount: paymentIntent?.amount / 100,
            currency: paymentIntent?.currency,
            paymentMethod: "card",
         });
      }
   };

   return { stripe, clientSecret, handleSubmit, error: cardError, isProcessing };
};

export default useStripePayment;
