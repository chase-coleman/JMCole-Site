import { useMediaQuery } from "react-responsive";
import Divider from "@mui/material/Divider";
import { BasicButton } from "../individual/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState } from "react";
import ModalComponent from "../individual/Modal";

const FAQs = () => {
  const lgScreen = useMediaQuery({
    // used to display the icon only on larger screens, not on smaller phone screens.
    query: "(min-width:1024px)",
  });

  return (
    <>
      <div className="flex flex-col items-center ml-9 mr-9 mt-5 gap-10 mb-5">
        <h1 className={lgScreen ? "header" : "subheader"}>
          Frequently Asked Questions
        </h1>
        <Divider
          className="w-3/4 self-center"
          style={{ backgroundColor: "var(--blue)" }}
        />

        {/* FAQ QUESTION 1 */}
        <div className="body-text flex flex-col items-center gap-5">
          <h3 className="subheader !text-[.75em] md:!text-[1em]">
            "Are there different parts to Medicare?"
          </h3>
          <div className="flex flex-col lg:flex-row gap-5">
            {!lgScreen && (
              <img
                src="/medicare-parts.webp"
                alt="medicare-parts"
                className="mx-auto w-full sm:w-3/4 md:w-1/2"
              />
            )}
            <div className="flex flex-col gap-2 md:gap-4">
              <span className="font-semibold">
                Yes - there are actually 4 parts.
              </span>
              <div>
                <span className="font-semibold">
                  Part A - Hospital Coverage
                </span>
                <ul className="list-disc">
                  <li>
                    Automatically granted at 65, or after 24 months on
                    disability.
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-semibold">Part B - Doctor Coverage</span>
                <ul className="list-disc">
                  <li>
                    You have a 7-month enrollment window around your 65th
                    birthday. If you're still working with group coverage, you
                    may qualify for a Special Enrollment Period. Every situation
                    is a little different - contact us to make sure you're
                    covered correctly.
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-semibold">
                  Part C - Medicare Advantage & Medigap
                </span>
                <ul className="list-disc">
                  <li>
                    Private insurers offer 2 plan types. Each has trade-offs,
                    and{" "}
                    <span className="underline">
                      the right fit depends on your needs
                    </span>
                    . We'll help you find it. No one plan is best for everybody!
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-semibold">Part D - Drug Coverage</span>
                <ul className="list-disc">
                  <li>
                    Offered by private insurers, either standalone or bundled
                    with a Medicare Advantage plan.
                  </li>
                </ul>
              </div>
            </div>
            {lgScreen && (
              <img
                src="/medicare-parts.webp"
                alt="medicare-parts"
                className="mx-auto w-full sm:w-3/4 md:w-1/2"
              />
            )}
          </div>
        </div>
        <span
          className="body-text text-center p-3 mt-2 rounded-sm"
          style={{
            backgroundColor: "var(--green)",
            color: "var(--text-white)",
          }}
        >
          Sound confusing yet? That's why we are here!
        </span>
        <Divider
          className="w-3/4 self-center"
          style={{ backgroundColor: "var(--blue)" }}
        />
        {/* FAQ QUESTION 2 */}
        <div className="body-text flex flex-col items-center gap-5">
          <h3 className="subheader !text-[.75em] md:!text-[1em]">
            "Is Medicare free? How much does it cost?"
          </h3>
          <div className="flex flex-col w-full lg:flex-row gap-5">
            <div className="flex flex-col gap-2 md:gap-4">
              <span className="">
                <span className="font-semibold">No</span> - Medicare is not
                free, despite what some think.
              </span>
              <ul className="list-disc flex flex-col gap-2">
                <li>
                  <span className="">
                    Part A is paid for by
                    the taxes that you paid into for 10 years of full-time
                    employment.
                  </span>
                </li>
                <li>
                  <span className="">
                    Part B does have a
                    monthly cost that varies from year-to-year.
                  </span>
                </li>
                <li>
                  <span className="">
                    Part C plans may have
                    a monthly premium, but it varies on the type of plan,
                    company, and specific plan.
                  </span>
                </li>
                <li>
                  <span className="">
                    Part D are similar to
                    Part C plans in that the monthly premium is specific to the
                    company and plan specific.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <span className="body-text text-center !text-[.75em] md:!text-[1em]">
            If your income is below a certain limit, you may be able for federal
            and/or state financial assistance. If your income is above a certain
            limit, you may have to pay more for your Medicare. We recommend
            consulting with us to see regarding your situation.
          </span>
        </div>
        <Divider
          className="w-3/4 self-center"
          style={{ backgroundColor: "var(--blue)" }}
        />
        {/* FAQ QUESTION 3 */}
        <div className="body-text flex flex-col items-center gap-5">
          <h3 className="subheader !text-[.75em] md:!text-[1em]">
            "Am I automatically signed up for Medicare at 65 or do I have to
            apply?"
          </h3>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-2 md:gap-4">
              <span className="font-semibold">The answer is: it depends.</span>
              <span className="">
                As stated above, Part A begins automatically at 65.
              </span>
              <div>
                <span className="font-semibold">
                  Part B enrollment depends on your situation:
                </span>
                <ul className="list-disc flex flex-col gap-2">
                  <li>
                    If you're already receiving Social Security at 65 Your Part
                    A & B card arrives by mail before your birthday. Medicare
                    starts the 1st of your birth month, and your Part B premium
                    is deducted from your SS benefits. No action needed.
                  </li>
                  <li>
                    If you're on Social Security but staying on employer
                    coverage You'll need to actively refuse Part B by following
                    the instructions on the card and returning it. (This avoids
                    the monthly Part B premium while you remain on your
                    employer's plan.)
                  </li>
                  <li>
                    If you haven't claimed Social Security yet You'll need to
                    apply for Part B yourself — either at 65, or when you retire
                    and lose your employer's group coverage.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span className="body-text text-center !text-[.75em] md:!text-[1em]">
            There are some other less common situations. We highly recommend
            that you do not risk incurring any Late Enrollment Penalties
            (explained below). Click the button at the bottom to allow us to
            help you with this process.
          </span>
        </div>
        <Divider
          className="w-3/4 self-center"
          style={{ backgroundColor: "var(--blue)" }}
        />
        {/* FAQ QUESTION 4 */}
        <div className="body-text flex flex-col items-center gap-5">
          <h3 className="subheader !text-[.75em] md:!text-[1em]">
            "Are there penalties if I do not sign up at the appropriate time?"
          </h3>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-2 md:gap-4">
              <span className="font-semibold">
                Simply put - yes there is. The federal government requires that
                Medicare eligible people enroll in Part B and also acquire Part
                D (a drug plan).
              </span>
              <span className="">
                Failure to do so can cause a person to acquire penalties that
                remain with you for life. There are a few exceptions to this
                rule but we strongly encourage you to contact us and allow us to
                help you avoid any and all penalties.
              </span>
              <div></div>
            </div>
          </div>
          <Divider
            className="w-3/4 self-center"
            style={{ backgroundColor: "var(--blue)" }}
          />
        </div>
        {/* FAQ QUESTION 5 */}
        <div className="body-text flex flex-col items-center gap-5">
          <h3 className="subheader !text-[.75em] md:!text-[1em]">
            "If I continue working after I turn 65, can I remain on my employer
            sponsored health insurance and not incur a penalty?""
          </h3>
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Image shown on top of text on smaller screens */}
            {!lgScreen && (
              <img
                src="/couple.webp"
                alt="couple"
                className="mx-auto w-3/4 md:w-1/2"
              />
            )}
            {/* Image shown to the left on larger screens */}
            {lgScreen && (
              <img
                src="/couple.webp"
                alt="couple"
                className="mx-auto w-3/4 md:w-1/2 h-100"
              />
            )}
            <div className="flex flex-col gap-2 md:gap-4">
              <span className="font-semibold">
                You are allowed to remain on your employer's health insurance
                plan so long as you are employed.
              </span>
              <p>
                When you decide to retire, you will then need to not only apply
                for your Part B coverage, but you will need to use a CMS (
                <span className="italic">
                  Center for Medicare and Medicaid Services
                </span>
                ) approved employer insurance verification form that we can give
                you. This will void the potential of a late enrollment penalty
                (LEP).
              </p>
              <div>
                <span className="">
                  However, it is our experience that Medicare plans (either
                  Advantage Plans or Medigap plans) are often significantly
                  better than employer plans AND often cheaper.
                </span>
              </div>
              <span className="body-text text-center !text-[.75em] md:!text-[1em]">
                To determine your best option, click the button on the bottom of
                the page. We will contact you and walk you through your options
                to determine which option is the best for your needs.
              </span>
            </div>
          </div>
          <Divider
            className="w-3/4 self-center"
            style={{ backgroundColor: "var(--blue)" }}
          />
          <div
            className="flex flex-col items-center gap-1 sm:gap-3 text-center"
            style={{ color: "var(--blue)" }}
          >
            <span>
              Now, that was a lot & we know it probably gave you more questions
              than answers, but those are the most common questions that we get.
            </span>
            <span>
              Click on the button below and fire away any questions that you
              still have.
            </span>
            <span>
              Or let us know that you would like our help (
              <span className="italic font-semibold">
                remember, you pay nothing
              </span>
              ) and we will contact you.
            </span>
            <BasicButton
              styling="w-1/2 sm:w-1/4"
              text="Request A Call"
              icon={<PhoneIcon fontSize="small" />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
