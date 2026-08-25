import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BasicButton } from "../individual/Button";

const window7 = [
  { tag: "−3 months", title: "Window opens", body: "Three months before your birth month, enrollment becomes available." },
  { tag: "Birth month", title: "The month itself", body: "Your 65th birthday month sits at the centre of the window.", key: true },
  { tag: "+3 months", title: "Window closes", body: "Three months after. Miss it and a Late Enrollment Penalty can follow." },
];

const T65 = () => {
  return (
    <>
      <section className="wrap pt-16 pb-10 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-5">
            <span className="eyebrow">Turning 65</span>
            <h1 className="display !text-[clamp(2.25rem,1.4rem+3.4vw,3.75rem)]">
              A 7-month window, and{" "}
              <span className="grad-text">nobody sends a reminder.</span>
            </h1>
            <p className="lede measure">
              Medicare requires you to enroll in Part B within a 7-month window —
              3 months before your birth month, your birth month itself, and 3
              months after.
            </p>
            <div className="flex flex-wrap gap-3">
              <BasicButton
                text="Request a call"
                styling="btn-lg"
                icon={<ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 18 }} />}
              />
              <a className="btn btn-ghost btn-lg" href="tel:541-554-8382">
                541-554-8382
              </a>
            </div>
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
              <span className={step.key ? "tag tag-green self-start" : "tag tag-blue self-start"}>
                {step.tag}
              </span>
              <h3 className="h3 !text-base">{step.title}</h3>
              <p className="body !text-sm">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card card-lit flex flex-col gap-3">
            <span className="tag tag-blue self-start">The penalty</span>
            <h2 className="h3">Part D is not optional either.</h2>
            <p className="body">
              If you don't enroll in a Part D drug plan at the same time as Part
              B, you'll face a Late Enrollment Penalty (LEP) — a fee added to
              your premium every month, for life. Is this something Medicare
              tells you upfront? No.
            </p>
          </div>

          <div className="card card-lit flex flex-col gap-3">
            <span className="tag tag-blue self-start">The gap</span>
            <h2 className="h3">No one shows up to walk you through it.</h2>
            <p className="body">
              Nobody at the Social Security office is going to arrive and teach
              you what else you need to know, or help you get signed up. That
              part is on you — unless you have someone in your corner.
            </p>
          </div>

          <div className="card card-lit flex flex-col gap-3 md:col-span-2">
            <span className="tag tag-green self-start">What we do</span>
            <h2 className="h3">That's where we come in.</h2>
            <p className="body measure">
              We'll make sure you're enrolled at the right time, guide you
              through Part B sign-up, and find the Part C and D plans that are
              the right fit for you. We will take care of it all — we'll answer
              every question and solve every problem with you. We will be your
              one-stop Medicare shop.
            </p>
            <p className="body measure">
              How can we do this? Because we know Medicare. This is what we do.
              And you pay us nothing for our services. Ever. No, seriously.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap pb-24">
        <div
          className="flex flex-col items-center gap-5 rounded-[var(--r-xl)] border px-6 py-12 text-center"
          style={{ borderColor: "var(--line)", background: "var(--surface)" }}
        >
          <span className="eyebrow eyebrow-green">No cost, ever</span>
          <h2 className="h2 !text-[clamp(1.5rem,1.1rem+1.6vw,2.1rem)]">
            Let us help you get what you deserve.
          </h2>
          <BasicButton
            text="Request a call"
            styling="btn-lg"
            icon={<ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 18 }} />}
          />
        </div>
      </section>
    </>
  );
};

export default T65;
