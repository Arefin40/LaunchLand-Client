import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import Button from "@components/Button";
import useStripePayment from "@hooks/useStripePayment";
import LoadingBar from "@components/LoadingBar";

const stripePromise = loadStripe(import.meta.env.APP_STRIPE_PK);

const StripePayementForm = ({ onSuccess, user, amount = 0 }) => {
   //prettier-ignore
   const { stripe, clientSecret, handleSubmit, error, isProcessing } = useStripePayment(user, amount, CardElement);

   return (
      <form onSubmit={handleSubmit(onSuccess)} className="w-full space-y-6">
         <div className="w-full space-y-1">
            <CardElement className="p-3 border border-gray-200 rounded-md" />
            {error && <small className="text-rose-500">{error}</small>}
         </div>

         <div className="px-5 mt-5 w-full mx-auto sm:max-w-[23rem] grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-2">
            <Button
               type="submit"
               disabled={!stripe || !clientSecret || isProcessing}
               color="primary"
               className="h-11"
            >
               {isProcessing ? <LoadingBar /> : <span> Pay ${amount}</span>}
            </Button>
         </div>
      </form>
   );
};

const CheckoutForm = ({ user, onSuccess, amount }) => {
   return (
      <Elements stripe={stripePromise}>
         <StripePayementForm user={user} onSuccess={onSuccess} amount={amount}></StripePayementForm>
      </Elements>
   );
};

export default CheckoutForm;
