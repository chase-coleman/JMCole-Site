import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BasicButton } from "../individual/Button";

const Faq = ({ question, defaultOpen = false, children }) => (
  <details className="faq" open={defaultOpen}>
    <summary>
      {question}
      <ExpandMoreIcon className="faq-chevron" fontSize="small" />
    </summary>
    <div className="faq-body prose-block">{children}</div>
  </details>
);

const FAQs = () => {
  return (
    <>
      <section className="wrap pt-16 pb-10 sm:pt-20">
        <div className="flex flex-col gap-5">
          <h1 className="display !text-[clamp(2.25rem,1.4rem+3.4vw,3.5rem)]">
            Frequently asked questions
          </h1>
          <p className="lede measure">
            These are the five we get asked most. If yours isn't here, ask us
            directly.
          </p>
        </div>
      </section>

      <section className="wrap pb-20">
        <div className="flex flex-col gap-3">
          <Faq question="Are there different parts to Medicare?" defaultOpen>
            <p>
              <strong>Yes - there are actually 4 parts.</strong>
            </p>
            <img
              src="/medicare-parts.webp"
              alt="The four parts of Medicare"
              className="w-full rounded-[var(--r)] sm:float-right sm:ml-6 sm:mb-4 sm:w-1/2"
              style={{ border: "1px solid var(--line)" }}
            />
            <p><strong>Part A - Hospital coverage</strong></p>
            <ul>
              <li>Automatically granted at 65, or after 24 months on disability.</li>
            </ul>
            <p><strong>Part B - Doctor coverage</strong></p>
            <ul>
              <li>
                You have a 7-month enrollment window around your 65th birthday.
                If you're still working with group coverage, you may qualify for
                a Special Enrollment Period. Every situation is a little
                different, so contact us to make sure you're covered correctly.
              </li>
            </ul>
            <p><strong>Part C - Medicare Advantage &amp; Medigap</strong></p>
            <ul>
              <li>
                Private insurers offer 2 plan types. Each has trade-offs, and the
                right fit depends on your needs. We'll help you find it. No one
                plan is best for everybody.
              </li>
            </ul>
            <p><strong>Part D - Drug coverage</strong></p>
            <ul>
              <li>
                Offered by private insurers, either standalone or bundled with a
                Medicare Advantage plan.
              </li>
            </ul>
            <p style={{ clear: "both" }}>
              Sound confusing yet? <em>That's why we are here.</em>
            </p>
          </Faq>

          <Faq question="Is Medicare free? How much does it cost?">
            <p>
              <strong>No</strong> - Medicare is not free, despite what some think.
            </p>
            <ul>
              <li>
                Part A is paid for by the taxes that you paid into for 10 years
                of full-time employment.
              </li>
              <li>Part B does have a monthly cost that varies from year to year.</li>
              <li>
                Part C plans may have a monthly premium, but it varies on the
                type of plan, company, and specific plan.
              </li>
              <li>
                Part D is similar to Part C plans in that the monthly premium is
                specific to the company and plan.
              </li>
            </ul>
            <p>
              If your income is below a certain limit, you may be able for
              federal and/or state financial assistance. If your income is above
              a certain limit, you may have to pay more for your Medicare. We
              recommend consulting with us regarding your situation.
            </p>
          </Faq>

          <Faq question="Am I automatically signed up for Medicare at 65, or do I have to apply?">
            <p><strong>The answer is: it depends.</strong></p>
            <p>As stated above, Part A begins automatically at 65.</p>
            <p><strong>Part B enrollment depends on your situation:</strong></p>
            <ul>
              <li>
                If you're already receiving Social Security at 65, your Part A &amp;
                B card arrives by mail before your birthday. Medicare starts the
                1st of your birth month, and your Part B premium is deducted from
                your SS benefits. No action needed.
              </li>
              <li>
                If you're on Social Security but staying on employer coverage,
                you'll need to actively refuse Part B by following the
                instructions on the card and returning it. (This avoids the
                monthly Part B premium while you remain on your employer's plan.)
              </li>
              <li>
                If you haven't claimed Social Security yet, you'll need to apply
                for Part B yourself, either at 65 or when you retire and lose
                your employer's group coverage.
              </li>
            </ul>
            <p>
              There are some other less common situations. We highly recommend
              that you do not risk incurring any Late Enrollment Penalties.
            </p>
          </Faq>

          <Faq question="Are there penalties if I do not sign up at the appropriate time?">
            <p>
              <strong>
                Simply put, yes there is. The federal government requires that
                Medicare eligible people enroll in Part B and also acquire Part D
                (a drug plan).
              </strong>
            </p>
            <p>
              Failure to do so can cause a person to acquire penalties that remain
              with you for life. There are a few exceptions to this rule, but we
              strongly encourage you to contact us and allow us to help you avoid
              any and all penalties.
            </p>
          </Faq>

          <Faq question="If I keep working after 65, can I stay on my employer's insurance without a penalty?">
            <img
              src="/man-working.webp"
              alt="Working past 65"
              className="w-full rounded-[var(--r)] sm:float-left sm:mr-6 sm:mb-4 sm:w-1/2"
              style={{ border: "1px solid var(--line)" }}
            />
            <p>
              <strong>
                You are allowed to remain on your employer's health insurance plan
                so long as you are employed.
              </strong>
            </p>
            <p>
              When you decide to retire, you will then need to not only apply for
              your Part B coverage, but you will need to use a CMS
              (<em>Center for Medicare and Medicaid Services</em>) approved
              employer insurance verification form that we can give you. This will
              void the potential of a late enrollment penalty (LEP).
            </p>
            <p>
              However, it is our experience that Medicare plans (either Advantage
              Plans or Medigap plans) are often significantly better than employer
              plans AND often cheaper.
            </p>
            <p style={{ clear: "both" }}>
              To determine your best option, get in touch. We will contact you and
              walk you through your options.
            </p>
          </Faq>
        </div>
      </section>

      <section className="border-t section-sm" style={{ borderColor: "var(--line)", background: "var(--surface-2)" }}>
        <div className="wrap flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="h2 !text-[clamp(1.4rem,1.1rem+1.2vw,1.85rem)]">
              That was a lot. Fire away with whatever is left.
            </h2>
            <p className="body">
              Or just let us know you'd like our help and we'll contact you.
              Remember, you pay nothing.
            </p>
          </div>
          <div className="flex-none">
            <BasicButton
              text="Request a call"
              icon={<ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 16 }} />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
