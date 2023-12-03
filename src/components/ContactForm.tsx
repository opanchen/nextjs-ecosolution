"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FormErrorMessage } from "./ui/FormErrorMessage";

import IconArrowRight from "../../public/icons/icon-arrow-right.svg";

interface IFormInput {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  useFormPersist("ecosolution-form", {
    watch,
    setValue,
  });

  const handleFormSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("SUBMIT: ", JSON.stringify(data));
    toast.success("Data sent successfully. Thank you!");
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="md:w-[342px] xl:w-[596px] flex flex-col gap-4 xl:gap-8 py-9 px-3 md:px-6 xl:p-12 bg-gray-primary"
      >
        <div className="flex flex-col gap-7">
          <label
            className={`form-label text-contact-label ${
              errors.fullName ? "border-b-red" : "border-b-green-secondary"
            } `}
          >
            * Full name
            <input
              {...register("fullName", {
                required: "Fullname is required",
                pattern: {
                  value: /^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$/,
                  message: "Wrong Fullname",
                },
                minLength: {
                  value: 3,
                  message: "Wrong Fullname",
                },
                maxLength: {
                  value: 80,
                  message: "Wrong Fullname",
                },
              })}
              aria-invalid={errors.fullName ? true : false}
              type="text"
              placeholder="John Rosie"
              className="text-form-input bg-gray-primary focus:outline-none"
            />
            {errors.fullName?.message && (
              <FormErrorMessage message={errors.fullName.message} />
            )}
          </label>

          <label
            className={`form-label text-contact-label ${
              errors.email ? "border-b-red" : "border-b-green-secondary"
            } `}
          >
            * E-mail
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Wrong Email",
                },
              })}
              aria-invalid={errors.email ? true : false}
              type="email"
              placeholder="johnrosie@gmail.com"
              className="text-form-input bg-gray-primary focus:outline-none"
            />
            {errors.email?.message && (
              <FormErrorMessage message={errors.email.message} />
            )}
          </label>

          <label
            className={`form-label text-contact-label ${
              errors.phone ? "border-b-red" : "border-b-green-secondary"
            } `}
          >
            * Phone:
            <input
              {...register("phone", {
                required: "Phone is required",
                minLength: {
                  value: 11,
                  message: "Wrong Phone",
                },
                maxLength: {
                  value: 12,
                  message: "Wrong Phone",
                },
              })}
              aria-invalid={errors.phone ? true : false}
              type="tel"
              placeholder="380961234567"
              className="text-form-input bg-gray-primary focus:outline-none"
            />
            {errors.phone?.message && (
              <FormErrorMessage message={errors.phone.message} />
            )}
          </label>

          <label className="form-label text-contact-label border-b-green-secondary">
            Message:
            <textarea
              {...register("message")}
              placeholder="Your message"
              className="resize-none h-[116px] overflow-scroll text-form-input bg-gray-primary focus:outline-none"
            />
          </label>
        </div>

        <button
          type="submit"
          className="group self-end flex items-center gap-3 border-[1px] rounded-[500px] py-1 pl-4 pr-1 border-green-secondary text-[16px] leading-[1.125] tracking-[-0.64px] hover:text-green-secondary hover:bg-green-primary hover:border-green-primary focus:text-green-secondary focus:bg-green-primary focus:border-green-primary transition_prop"
        >
          Send
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-secondary">
            <IconArrowRight className="w-4 h-4 text-green-primary" />
          </span>
        </button>
      </form>

      <ToastContainer />
    </>
  );
};
