import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BasicButton } from "../individual/Button";

const window7 = [
  { tag: "3 months before", body: "Your enrollment window opens three months ahead of your birth month." },
  { tag: "Your birth month", body: "The middle of the window. Coverage generally starts on the 1st.", key: true },
  { tag: "3 months after", body: "The window closes. Miss it and a Late Enrollment Penalty can follow you." },
];

const T65 = () => {
  return (
    <>
      <section className="wrap pt-14 pb-10 sm:pt-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col items-start gap-5">
            <h1 className="display !text-[clamp(2.25rem,1.4rem+3.4vw,3.5rem)]">
              Turning 65 and not sure what to do?
            </h1>
            <p className="lede measure">
              Medicare requires you to enroll in Part B within a 7-month window:
              3 months before your birth month, your birth month itself, and 3
              months after.
            </p>
          </div>
          <img
            src="/t65.webp"
            alt="Turning 65"
            className="w-full rounded-[var(--r-lg)] object-cover"
            style={{ border: "1px solid var(--line)" }}
          />
        </div>
      </section>

      <section className="wrap pb-16">
        <div className="timeline">
          {window7.map((step) => (
            <div key={step.tag} className={`timeline-step ${step.key ? "is-key" : ""}`}>
              <span className="eyebrow">{step.tag}</span>
              <p className="body !text-sm">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap pb-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col gap-3">
            <h2 className="h3">Part D is not optional either</h2>
            <p className="body">
              If you don't enroll in a Part D drug plan at the same time as Part
              B, you'll face a Late Enrollment Penalty. That's a fee added to
              your premium every month, for life. Is this something Medicare
              tells you upfront? No.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="h3">Nobody walks you through it</h2>
            <p className="body">
              No one at the Social Security office is going to show up and teach
              you what else you need to know, or help you get signed up. That
              part is on you, unless you have someone in your corner.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:col-span-2">
            <h2 className="h3">That's where we come in</h2>
            <p className="body measure">
              We'll make sure you're enrolled at the right time, guide you
              through Part B sign-up, and find the Part C and D plans that fit.
              We'll take care of all of it, answer every question, and solve
              every problem with you. We'll be your one-stop Medicare shop.
            </p>
            <p className="body measure">
              How can we do this? Because we know Medicare. It's what we do. And
              oh yeah, you pay us nothing for our services. Ever. No seriously!
            </p>
          </div>
        </div>
      </section>

      <section className="border-t section-sm" style={{ borderColor: "var(--line)", background: "var(--surface-2)" }}>
        <div className="wrap flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="h2 !text-[clamp(1.4rem,1.1rem+1.2vw,1.85rem)]">
            Request a call from us, or call us yourself.
          </h2>
          <div className="flex flex-none flex-wrap gap-3">
            <BasicButton
              text="Request a call"
              icon={<ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 16 }} />}
            />
            <a className="btn btn-ghost" href="tel:541-554-8382">
              541-554-8382
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default T65;
