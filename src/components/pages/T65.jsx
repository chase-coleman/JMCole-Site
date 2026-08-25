import Divider from "@mui/material/Divider";
import { BasicButton } from "../individual/Button";
import PhoneIcon from '@mui/icons-material/Phone';

const T65 = () => {
  return (
    <div className="page">
      <div className="content flex flex-col items-center gap-8">
        <h1 className="header">Turning 65 & confused what to do?</h1>
        {/* MUI Divider draws a border, so colour it via borderColor rather than a background */}
        <Divider className="w-3/4" sx={{ borderColor: 'var(--blue)' }} />

        <div className="body-text w-full flow-root">
          <img
            src="/t65.webp"
            alt="65th-birthday"
            className="mb-4 w-full rounded-lg object-cover sm:float-left sm:mr-6 sm:w-1/2"
          />
          <p className="mb-4">
            Medicare requires you to enroll in Part B within a 7-month window —
            3 months before your birth month, your birth month itself, and 3
            months after.
          </p>
          <p className="mb-4">
            On top of that, if you don't enroll in a Part D drug plan at the
            same time as Part B, you'll face a Late Enrollment Penalty (LEP) —
            a fee added to your premium every month for life. Is this something
            Medicare tells you upfront? No.
          </p>
          <p className="mb-4">
            Unfortunately no one at the Social Security office is going to show
            up and teach you what else you need to know or help you get signed
            up.
          </p>
          <p className="mb-4">
            That's where we come in. We'll make sure you're enrolled at the
            right time, guide you through Part B sign-up, and find the Part C
            and D plans that are the right fit for you.
          </p>
          <p className="mb-4">
            How can we do this? We can do this because we know Medicare. This is
            what we do. Let us help you get what you deserve. And oh yeah - you
            pay us nothing for our services. Ever. No seriously!
          </p>
          <p className="mb-4">
            We will take care of it all for you, we will answer every question
            and solve every problem with you. We will be your one stop Medicare
            shop and you pay us nothing for our services.
          </p>
          <p>Request a call from us or call us yourself at 541-554-8382</p>
        </div>

        <BasicButton text="Request A Call" icon={<PhoneIcon fontSize='small'/>} />
      </div>
    </div>
  );
};

export default T65;
