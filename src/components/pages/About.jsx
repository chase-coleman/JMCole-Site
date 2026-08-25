import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { brokers } from "../../assets/brokers";
import Broker from "../individual/BrokerProfile";
import { BasicButton } from "../individual/Button";

const facts = [
  { value: "22+", label: "Combined years of Medicare experience" },
  { value: "2016", label: "Serving Oregon seniors since" },
  { value: "2", label: "Offices — Eugene & Portland" },
  { value: "Multi", label: "State licensed, so we follow you" },
];

const About = () => {
  return (
    <>
      <section className="wrap pt-16 pb-4 sm:pt-20">
        <div className="flex flex-col gap-5">
          <span className="eyebrow">About us</span>
          <h1 className="display max-w-3xl !text-[clamp(2.25rem,1.4rem+3.4vw,3.75rem)]">
            Built on one simple principle:{" "}
            <span className="grad-text">our clients come first.</span>
          </h1>
          <p className="lede measure">
            JMCole Group is an independent Medicare brokerage. Our team brings
            over 22 combined years of Medicare experience, giving you the
            confidence that you're working with people who truly know this space.
          </p>
          <p className="body measure">
            With brokers in Eugene &amp; Portland, Oregon, we serve clients
            throughout the state — and because life doesn't always stay in one
            place, we are licensed in multiple states so we can continue serving
            our clients wherever they go. When you work with us, you're not just
            getting a broker, you're getting a long-term partner in your
            healthcare coverage.
          </p>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1.5">
              <dt className="sr-only">{fact.label}</dt>
              <dd className="stat-value m-0">{fact.value}</dd>
              <p className="stat-label">{fact.label}</p>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="mb-10 flex flex-col gap-3">
            <span className="eyebrow">The people</span>
            <h2 className="h2">Meet the team.</h2>
          </div>
          <div className="flex flex-col gap-4">
            {brokers.map((broker, i) => (
              <Broker key={broker.name} broker={broker} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="wrap pb-24">
        <div
          className="flex flex-col items-center gap-6 rounded-[var(--r-xl)] border px-6 py-12 text-center"
          style={{ borderColor: "var(--line)", background: "var(--surface)" }}
        >
          <span className="eyebrow eyebrow-green">Medicare Plans Resource Center</span>
          <img src="/mprc-logo.webp" alt="Medicare Plans Resource Center" className="w-full max-w-sm" />
          <p className="body">
            1011 Valley River Way, Suite #116A
            <br />
            Eugene, OR 97401
          </p>
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

export default About;
