import { Input } from "@components/Form";
import DatePicker from "@components/Form/DatePicker";
import Modal from "@components/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";

const MutateCouponModal = ({
   title = "",
   description = "",
   Submitlabel = "",
   coupon,
   onSubmit,
   onCancel,
}) => {
   const [expiryDate, setExpiryDate] = useState(coupon ? new Date(coupon?.expiryDate) : null);
   const discount = coupon
      ? coupon?.discountType === "percent"
         ? `${coupon?.discount}%`
         : `$${coupon?.discount}`
      : "";

   //prettier-ignore
   const { handleSubmit, register, formState: { errors }} = useForm({
      defaultValues: {
         code: coupon?.code||"",
         discount: discount,
         description: coupon?.description || "",
      },
   });

   const onFormSubmit = ({ discount, ...data }) => {
      let discountProps = { discount: parseInt(discount.replace(/^\D+/g, "")) };
      discountProps["discountType"] = discount.includes("%") ? "percent" : "amount";
      onSubmit({ ...discountProps, ...data, expiryDate });
   };

   return (
      <Modal.Dialog component="form" onFormSubmit={handleSubmit(onFormSubmit)}>
         <Modal.Header title={title} description={description} />

         <div className="space-y-2">
            <div className="grid grid-cols-2 gap-x-4">
               <Input
                  disabled={coupon}
                  label="Coupon code"
                  placeholder="Enter coupon code"
                  errors={errors}
                  {...register("code", { required: "Coupon code is required" })}
               />
               <Input
                  label="Discount amount"
                  placeholder="E.g: 25% or $25"
                  errors={errors}
                  {...register("discount", {
                     required: "Discount amount is required",
                     validate: (value) => {
                        return value.includes("%") || value.includes("$")
                           ? true
                           : "Must include $ or %";
                     },
                  })}
               />
            </div>
            <Input
               label="Code description"
               placeholder="Enter coupon code description"
               errors={errors}
               {...register("description", { required: "Code description is required" })}
            />
            <DatePicker
               label="Expiry date"
               className="w-full"
               minDate={new Date()}
               value={expiryDate}
               onChange={(date) => setExpiryDate(date)}
            />
         </div>

         <Modal.ButtonGroup>
            <Modal.SubmitButton>{Submitlabel}</Modal.SubmitButton>
            <Modal.CancelButton onClick={onCancel}>Cancel</Modal.CancelButton>
         </Modal.ButtonGroup>
      </Modal.Dialog>
   );
};
export default MutateCouponModal;
