import Divider from "@mui/material/Divider";
import { BasicButton } from "../individual/Button";
import PhoneIcon from "@mui/icons-material/Phone";

/* MUI Divider draws a border, so it is coloured via borderColor rather than a
   background. Wrapped up here so every rule on the page is identical. */
const Rule = () => (
  <Divider className="w-3/4" sx={{ borderColor: "var(--blue)" }} />
);

const FAQs = () => {
  return (
    <div className="page">
      <div className="content flex flex-col items-center gap-10">
        <h1 className="header">Frequently Asked Questions</h1>
        <Rule />

        {/* FAQ QUESTION 1 */}
        <section className="body-text flex w-full flex-col items-center gap-5">
          <h2 className="subheader">"Are there different parts to Medicare?"</h2>
          <div className="w-full flow-root">
            <img
              src="/medicare-parts.webp"
              alt="medicare-parts"
              className="mb-4 w-full rounded-lg object-cover sm:float-right sm:ml-6 sm:w-1/2"
            />
            <p className="font-semibold">Yes - there are actually 4 parts.</p>
            <div className="mt-3">
              <span className="font-semibold">Part A - Hospital Coverage</span>
              <ul className="list-disc pl-5">
                <li>
                  Automatically granted at 65, or after 24 months on disability.
                </li>
              </ul>
            </div>
            <div className="mt-3">
              <span className="font-semibold">Part B - Doctor Coverage</span>
              <ul className="list-disc pl-5">
                <li>
                  You have a 7-month enrollment window around your 65th
                  birthday. If you're still working with group coverage, you may
                  qualify for a Special Enrollment Period. Every situation is a
                  little different - contact us to make sure you're covered
                  correctly.
                </li>
              </ul>
            </div>
            <div className="mt-3">
              <span className="font-semibold">
                Part C - Medicare Advantage & Medigap
              </span>
              <ul className="list-disc pl-5">
                <li>
                  Private insurers offer 2 plan types. Each has trade-offs, and{" "}
                  <span className="underline">
                    the right fit depends on your needs
                  </span>
                  . We'll help you find it. No one plan is best for everybody!
                </li>
              </ul>
            </div>
            <div className="mt-3">
              <span className="font-semibold">Part D - Drug Coverage</span>
              <ul className="list-disc pl-5">
                <li>
                  Offered by private insurers, either standalone or bundled with
                  a Medicare Advantage plan.
                </li>
              </ul>
            </div>
          </div>
          <p className="body-text text-center">
            Sound confusing yet?{" "}
            <span className="underline">That's why we are here!</span>
          </p>
        </section>
        <Rule />

        {/* FAQ QUESTION 2 */}
        <section className="body-text flex w-full flex-col items-center gap-5">
          <h2 className="subheader">
            "Is Medicare free? How much does it cost?"
          </h2>
          <div className="flex w-full flex-col gap-3">
            <p>
              <span className="font-semibold">No</span> - Medicare is not free,
              despite what some think.
            </p>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>
                Part A is paid for by the taxes that you paid into for 10 years
                of full-time employment.
              </li>
              <li>
                Part B does have a monthly cost that varies from year-to-year.
              </li>
              <li>
                Part C plans may have a monthly premium, but it varies on the
                type of plan, company, and specific plan.
              </li>
              <li>
                Part D is similar to Part C plans in that the monthly premium is
                specific to the company and plan.
              </li>
            </ul>
          </div>
          <p className="prose text-center">
            If your income is below a certain limit, you may be able for federal
            and/or state financial assistance. If your income is above a certain
            limit, you may have to pay more for your Medicare. We recommend
            consulting with us to see regarding your situation.
          </p>
        </section>
        <Rule />

        {/* FAQ QUESTION 3 */}
        <section className="body-text flex w-full flex-col items-center gap-5">
          <h2 className="subheader">
            "Am I automatically signed up for Medicare at 65 or do I have to
            apply?"
          </h2>
          <div className="flex w-full flex-col gap-3">
            <p className="font-semibold">The answer is: it depends.</p>
            <p>As stated above, Part A begins automatically at 65.</p>
            <div>
              <span className="font-semibold">
                Part B enrollment depends on your situation:
              </span>
              <ul className="mt-2 flex list-disc flex-col gap-2 pl-5">
                <li>
                  If you're already receiving Social Security at 65 your Part
                  A & B card arrives by mail before your birthday. Medicare
                  starts the 1st of your birth month, and your Part B premium
                  is deducted from your SS benefits. No action needed.
                </li>
                <li>
                  If you're on Social Security but staying on employer
                  coverage you'll need to actively refuse Part B by following
                  the instructions on the card and returning it. (This avoids
                  the monthly Part B premium while you remain on your
                  employer's plan.)
                </li>
                <li>
                  If you haven't claimed Social Security yet you'll need to
                  apply for Part B yourself — either at 65, or when you retire
                  and lose your employer's group coverage.
                </li>
              </ul>
            </div>
          </div>
          <p className="prose text-center">
            There are some other less common situations. We highly recommend
            that you do not risk incurring any Late Enrollment Penalties
            (explained below). Click the button at the bottom to allow us to
            help you with this process.
          </p>
        </section>
        <Rule />

        {/* FAQ QUESTION 4 */}
        <section className="body-text flex w-full flex-col items-center gap-5">
          <h2 className="subheader">
            "Are there penalties if I do not sign up at the appropriate time?"
          </h2>
          <div className="flex w-full flex-col gap-3">
            <p className="font-semibold">
              Simply put - yes there is. The federal government requires that
              Medicare eligible people enroll in Part B and also acquire Part D
              (a drug plan).
            </p>
            <p>
              Failure to do so can cause a person to acquire penalties that
              remain with you for life. There are a few exceptions to this rule
              but we strongly encourage you to contact us and allow us to help
              you avoid any and all penalties.
            </p>
          </div>
        </section>
        <Rule />

        {/* FAQ QUESTION 5 */}
        <section className="body-text flex w-full flex-col items-center gap-5">
          <h2 className="subheader">
            "If I continue working after I turn 65, can I remain on my employer
            sponsored health insurance and not incur a penalty?"
          </h2>
          <div className="w-full flow-root">
            <img
              src="/man-working.webp"
              alt="man-working"
              className="mb-4 w-full rounded-lg object-cover sm:float-left sm:mr-6 sm:w-1/2"
            />
            <p className="font-semibold">
              You are allowed to remain on your employer's health insurance
              plan so long as you are employed.
            </p>
            <p className="mt-3">
              When you decide to retire, you will then need to not only apply
              for your Part B coverage, but you will need to use a CMS (
              <span className="italic">
                Center for Medicare and Medicaid Services
              </span>
              ) approved employer insurance verification form that we can give
              you. This will void the potential of a late enrollment penalty
              (LEP).
            </p>
            <p className="mt-3">
              However, it is our experience that Medicare plans (either
              Advantage Plans or Medigap plans) are often significantly better
              than employer plans AND often cheaper.
            </p>
          </div>
          <p className="prose text-center">
            To determine your best option, click the button on the bottom of
            the page. We will contact you and walk you through your options
            to determine which option is the best for your needs.
          </p>
        </section>
        <Rule />

        {/* CLOSING CALL TO ACTION */}
        <div
          className="body-text prose flex flex-col items-center gap-3 text-center"
          style={{ color: "var(--blue)" }}
        >
          <p>
            Now, that was a lot & we know it probably gave you more questions
            than answers, but those are the most common questions that we get.
          </p>
          <p>
            Click on the button below and fire away any questions that you
            still have.
          </p>
          <p>
            Or let us know that you would like our help (
            <span className="italic font-semibold">
              remember, you pay nothing
            </span>
            ) and we will contact you.
          </p>
          <div className="mt-2">
            <BasicButton
              text="Request A Call"
              icon={<PhoneIcon fontSize="small" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
