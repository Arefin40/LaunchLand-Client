import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAxiosSecure } from "@hooks/axios";
import { useSubscribe } from "@hooks/useSubscription";
import { Tickmark } from "@icons/dashboard";
import useVisibility from "@hooks/useVisibility";
import Modal from "@components/Modal";
import Button from "@components/Button";
import CheckoutForm from "@containers/CheckoutForm";
import toast from "react-hot-toast";

const SubscriptionModalWithButton = ({ user }) => {
   const SUBSCRIPTION_PRICE = 99;
   const { handleSubmit, register, setValue } = useForm();
   const axiosSecure = useAxiosSecure();
   const subscribe = useSubscribe(user?._id);
   const { isVisible, show, hide } = useVisibility();
   const [couponError, setCouponError] = useState("");
   const [discount, setDiscont] = useState();
   const [showCheckOutForm, setShowCheckOutForm] = useState(false);

   const applyCoupon = async ({ coupon: code }) => {
      try {
         const { data } = await axiosSecure.get(
            `coupons/apply?code=${code}&amount=${SUBSCRIPTION_PRICE}`
         );
         setDiscont(data.data);
         setCouponError("");
      } catch (error) {
         console.log(error);
         if (error.response.status === 404 || error.response.status === 400)
            setCouponError(error?.response?.data?.message);
      }
   };

   const Subscribe = (data) => {
      hide();
      subscribe.mutate(
         { userId: user?._id, paymentDetails: { ...data, usedCoupon: discount?.code } },
         { onSuccess: ({ message }) => toast.success(message) }
      );
   };

   const closeModal = () => {
      hide();
      setValue("coupon", "");
      setDiscont(null);
      setCouponError("");
      setShowCheckOutForm(false);
   };

   const totalAmount = SUBSCRIPTION_PRICE - (discount?.discount || 0);

   return (
      <>
         <Button onClick={show} variant="text" color="primary" className="justify-self-start">
            Subscribe now
         </Button>

         {isVisible && (
            <Modal.Dialog className="text-gray-500 text-sm" buttonClass="h-12">
               <Modal.Header
                  title="Subscription Confirmation"
                  description="Upgrade to Pro Membership"
               />

               <div className="my-5 flex justify-center items-end gap-x-1">
                  <h1 className="text-gray-800 font-semibold text-3xl">${SUBSCRIPTION_PRICE}</h1>
                  <p className="font-medium pb-1">/ per year</p>
               </div>

               <ul className="px-4 space-y-2">
                  <h3 className="text-gray-800 font-semibold">Subscription benefits:</h3>
                  <li className="flex items-center gap-x-3">
                     <Tickmark />
                     <p>Launch unlimited products</p>
                  </li>
                  <li className="flex items-center gap-x-3">
                     <Tickmark />
                     <p>Early access to new/beta features</p>
                  </li>
               </ul>

               <div className="my-5 border-b space-y-4" />

               <div>
                  {showCheckOutForm ? (
                     <CheckoutForm user={user} amount={totalAmount} onSuccess={Subscribe} />
                  ) : (
                     <>
                        <div className="px-4 space-y-4">
                           {!discount && (
                              <div className="space-y-1">
                                 <form
                                    onSubmit={handleSubmit(applyCoupon)}
                                    className="flex rounded-md"
                                 >
                                    <input
                                       id="discount"
                                       type="text"
                                       {...register("coupon", { required: true })}
                                       placeholder="Coupon code"
                                       className="p-3 w-full rounded-l-md border border-gray-200 outline-none"
                                    />
                                    <button
                                       type="submit"
                                       className="px-6 py-3 h-full rounded-r-md border border-primary-500 bg-primary-500 text-white"
                                    >
                                       Apply
                                    </button>
                                 </form>
                                 {couponError && (
                                    <div className="text-sm text-rose-500">{couponError}</div>
                                 )}
                              </div>
                           )}

                           <div className="grid gap-y-2">
                              <div className="flex items-center justify-between">
                                 <h2>Subtotal price</h2>
                                 <p className="text-gray-800 font-semibold">
                                    ${SUBSCRIPTION_PRICE}
                                 </p>
                              </div>

                              {discount && (
                                 <div className="flex items-center justify-between">
                                    <h2>
                                       <span>Discount</span>
                                       <span className="pl-2">({discount?.discountString})</span>
                                    </h2>
                                    <p className="text-primary-500 font-semibold">
                                       -${discount?.discount}
                                    </p>
                                 </div>
                              )}

                              <div className="flex items-center justify-between">
                                 <h2>Total price</h2>
                                 <p className="text-gray-800 font-semibold">${totalAmount}</p>
                              </div>
                           </div>
                        </div>

                        <Modal.ButtonGroup>
                           <Modal.SubmitButton onClick={() => setShowCheckOutForm(true)}>
                              Proceed to payment
                           </Modal.SubmitButton>
                        </Modal.ButtonGroup>
                     </>
                  )}
               </div>

               <div className="mt-3 flex justify-center">
                  <button
                     onClick={closeModal}
                     className="px-5 py-2 text-sm hover:bg-gray-50 rounded-md"
                  >
                     Keep using free plan
                  </button>
               </div>
            </Modal.Dialog>
         )}
      </>
   );
};
export default SubscriptionModalWithButton;
