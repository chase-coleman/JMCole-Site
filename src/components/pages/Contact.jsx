import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import { useState, useRef } from "react";
import Modal from "@mui/material/Modal";
import emailjs from "@emailjs/browser";
import ModalBox from "../individual/Modal";

// Handles the input validation errors
function FormField({ id, label, error, children }) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <div className="relative">
        {children}
        {error && (
          <div className="absolute left-2 top-full mt-2 z-50 flex items-center gap-2 bg-white border border-gray-300 shadow-lg rounded px-3 py-2 text-sm text-gray-800 whitespace-nowrap">
            <div className="absolute -top-2 left-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white" />
            <div className="flex items-center justify-center w-6 h-6 bg-red-500 rounded text-white font-bold text-xs shrink-0">
              !
            </div>
            <span className="font-semibold text-red-500">{error.message}</span>
          </div>
        )}
      </div>
    </div>
  );
}

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState("");
  const form = useRef("#inputForm");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const sendRequest = () => {
    // Handles formatting and sending email to EmailJS service.
    return emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          return { status: "Success" };
        },
        (err) => {
          return { status: "Failed", error: err };
        },
      );
  };

  const onSubmit = async () => {
    setSubmitting(true);
    const request = await sendRequest();
    if (request?.status === "Failed") {
      // here I am waiting 1 second before showing any error messages so the user feels like we actually tried
      // submitting a request instead of immediately showing an error
      setTimeout(() => {
        setShowModal(true)
        setErr(request?.error);
        setSubmitting(false);
      }, 1000)
    } else { // handles successfull submission to EmailJS service
      setShowModal(true)
      reset();
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center ml-9 mr-9 mt-5 gap-10 mb-5">
        <div className="flex flex-col gap-4">
          <h1 className="header">Get in touch</h1>
          <h3 className="subheader !text-sm md:!text-lg w-full sm:w-1/2 mx-auto">
            We'd love to help you! If you'd like our guidance, please fill out
            the form below:
          </h3>
        </div>
        <Modal
          className="relative"
          open={showModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {err ? (
            <ModalBox
              status={false}
              setShowModal={setShowModal}
            />
          ) : (
            <ModalBox
              status={true}
              setShowModal={setShowModal}
            />
          )}
        </Modal>
        {submitting ? (
          <Oval
            visible={true}
            height="80"
            width="80"
            color="var(--blue)"
            secondaryColor="var(--blue-alt)"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <div className="body-text w-full sm:w-2/3 md:w-[550px] bg-[#05567a] rounded-xl">
            <form
              id="inputForm"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center gap-5 md:gap-10 p-5 text-black"
            >
              {/* First & Last Name Row */}
              <div className="flex flex-col md:flex-row md:items-center gap-5 w-full">
                <FormField
                  id="firstName"
                  label="First Name"
                  error={errors.firstName}
                >
                  <input
                    id="firstName"
                    {...register("firstName", {
                      required: "First name is required",
                      maxLength: { value: 100, message: "Max 100 characters" },
                    })}
                    className="bg-white h-8 w-2/3 md:w-full pl-1 !text-md rounded"
                  />
                </FormField>

                <FormField
                  id="lastName"
                  label="Last Name"
                  error={errors.lastName}
                >
                  <input
                    id="lastName"
                    {...register("lastName", {
                      required: "Last name is required",
                      maxLength: { value: 100, message: "Max 100 characters" },
                    })}
                    className="bg-white h-8 w-2/3 md:w-full pl-1 !text-md rounded"
                  />
                </FormField>
              </div>

              {/* Email */}
              <FormField
                id="emailInput"
                label="Email"
                error={errors.emailInput}
              >
                <input
                  id="emailInput"
                  type="email"
                  {...register("emailInput", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="bg-white h-8 w-full pl-1 !text-md rounded"
                />
              </FormField>

              {/* Phone Number */}
              <FormField
                id="phoneNumber"
                label="Phone Number"
                error={errors.phone}
              >
                <input
                  id="phoneNumber"
                  type="tel"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    validate: (value) => {
                      const digits = value.replace(/\D/g, "");
                      return (
                        digits.length === 10 || "Phone number must be 10 digits"
                      );
                    },
                    onChange: (e) => {
                      e.target.value = e.target.value.replace(/\D/g, "");
                    },
                    onBlur: (e) => {
                      const digits = e.target.value.replace(/\D/g, "");
                      if (digits.length === 10) {
                        e.target.value = digits.replace(
                          /(\d{3})(\d{3})(\d{4})/,
                          "$1-$2-$3",
                        );
                      }
                    },
                  })}
                  maxLength={10}
                  inputMode="numeric"
                  className="bg-white h-8 w-full pl-1 !text-md rounded"
                />
              </FormField>

              {/* Message */}
              <FormField
                id="messageInput"
                label="Message"
                error={errors.example}
              >
                <textarea
                  id="messageInput"
                  maxLength={500}
                  {...register("message", { required: false })}
                  className="bg-white h-25 resize-none overflow-y-auto w-full pl-1 !text-md rounded"
                />
              </FormField>

              <button
                type="submit"
                className="w-36 !text-lg !p-1 text-white rounded"
                style={{ backgroundColor: "var(--green)" }}
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
