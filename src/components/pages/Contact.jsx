import { useForm, Controller } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import { useState, useRef } from "react";
import Modal from "@mui/material/Modal";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import emailjs from "@emailjs/browser";
import ModalBox from "../individual/Modal";
import { counties, promises } from "../../data/constants";

// County options match from the start of the name only: "li" offers Lincoln
// and Linn, not Gilliam.
const filterCounties = createFilterOptions({ matchFrom: "start", trim: true });

// Handles the input validation errors & rendering them
function FormField({ id, label, error, children }) {
  return (
    <div className="flex w-full flex-col">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      {children}
      {error && (
        <p className="field-msg" role="alert">
          <span
            className="grid h-4 w-4 flex-none place-items-center rounded-full text-[10px] font-bold"
            style={{ background: "var(--danger)", color: "#FFFFFF" }}
            aria-hidden="true"
          >
            !
          </span>
          {error.message}
        </p>
      )}
    </div>
  );
}

// Env variables for EmailJS
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
    control,
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
      <section className="wrap pt-16 pb-8 sm:pt-20">
        <div className="flex flex-col gap-5">
          <h1 className="display !text-[clamp(2.25rem,1.4rem+3.4vw,3.5rem)]">
            Get in touch
          </h1>
          <p className="lede measure">
            Fill this out and one of our brokers will get back to you. It costs
            you nothing.
          </p>
        </div>
      </section>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {err ? (
          <ModalBox status={false} setShowModal={setShowModal} />
        ) : (
          <ModalBox status={true} setShowModal={setShowModal} />
        )}
      </Modal>

      <section className="wrap pb-24">
        <div className="split">
          {/* ── Side panel ── */}
          <aside className="split-pane split-pane-alt flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="mono" style={{ color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: ".14em" }}>
                What happens next
              </span>
              <ul className="flex flex-col gap-4">
                {promises?.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      className="mt-1 grid h-4 w-4 flex-none place-items-center rounded-full"
                      style={{ background: "var(--green-soft)", border: "1px solid var(--green-line)" }}
                      aria-hidden="true"
                    >
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    <span className="body !text-sm">{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="hairline" />

            <div className="flex flex-col gap-3">
              <span className="mono" style={{ color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: ".14em" }}>
                Prefer to call
              </span>
              <a className="h3" style={{ color: "var(--accent)" }} href="tel:541-554-8382">
                541-554-8382
              </a>
              <p className="body !text-sm">
                1011 Valley River Way, Suite #116A
                <br />
                Eugene, OR 97401
              </p>
            </div>
          </aside>

          {/* ── Form ── */}
          <div className="split-pane">
            {submitting ? (
              <div className="flex min-h-[26rem] flex-col items-center justify-center gap-4">
                <Oval
                  visible={true}
                  height="56"
                  width="56"
                  color="var(--accent)"
                  secondaryColor="var(--surface-3)"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
                <p className="mono" style={{ color: "var(--text-faint)" }}>
                  Sending your request…
                </p>
              </div>
            ) : (
              <form
                id="inputForm"
                onSubmit={handleSubmit(onSubmit)}
                className="flex min-h-[26rem] flex-col gap-5"
              >
                {/* First & Last Name Row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField id="firstName" label="First name" error={errors.firstName}>
                    <input
                      id="firstName"
                      autoComplete="given-name"
                      {...register("firstName", {
                        required: "First name is required",
                        maxLength: { value: 100, message: "Max 100 characters" },
                      })}
                      className={`input ${errors.firstName ? "input-error" : ""}`}
                    />
                  </FormField>

                  <FormField id="lastName" label="Last name" error={errors.lastName}>
                    <input
                      id="lastName"
                      autoComplete="family-name"
                      {...register("lastName", {
                        required: "Last name is required",
                        maxLength: { value: 100, message: "Max 100 characters" },
                      })}
                      className={`input ${errors.lastName ? "input-error" : ""}`}
                    />
                  </FormField>
                </div>

                {/* Email */}
                <FormField id="emailInput" label="Email" error={errors.emailInput}>
                  <input
                    id="emailInput"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    {...register("emailInput", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className={`input ${errors.emailInput ? "input-error" : ""}`}
                  />
                </FormField>

                {/* Phone Number */}
                <FormField id="phoneNumber" label="Phone number" error={errors.phoneNumber}>
                  <input
                    id="phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    placeholder="5415548382"
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
                    className={`input ${errors.phoneNumber ? "input-error" : ""}`}
                  />
                </FormField>

                {/* County */}
                <FormField id="county" label="County" error={errors.county}>
                  <Controller
                    name="county"
                    control={control}
                    defaultValue={null}
                    rules={{ required: "Please choose your county" }}
                    render={({ field }) => (
                      <>
                        <Autocomplete
                          id="county"
                          options={counties}
                          filterOptions={filterCounties}
                          value={field.value}
                          onChange={(_, value) => field.onChange(value)}
                          onBlur={field.onBlur}
                          autoHighlight
                          renderInput={(params) => (
                            <div ref={params.InputProps.ref}>
                              <input
                                {...params.inputProps}
                                type="text"
                                placeholder="Start typing your county"
                                className={`${params.inputProps.className} input ${errors.county ? "input-error" : ""}`}
                              />
                            </div>
                          )}
                        />
                        {/* EmailJS reads the form's named inputs, so the
                            selected county is sent from here rather than from
                            whatever text is in the search box. */}
                        <input type="hidden" name="county" value={field.value ?? ""} />
                      </>
                    )}
                  />
                </FormField>

                {/* Message */}
                <FormField id="messageInput" label="Message (optional)" error={errors.message}>
                  <textarea
                    id="messageInput"
                    rows={4}
                    maxLength={500}
                    placeholder="Tell us where you are in the process…"
                    {...register("message", { required: false })}
                    className="input resize-none"
                  />
                </FormField>

                <button type="submit" className="btn btn-primary btn-lg mt-auto self-start">
                  Send request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
