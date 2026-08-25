import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { brokers } from "../../assets/brokers";
import Broker from "../individual/BrokerProfile";
import { BasicButton } from "../individual/Button";

const About = () => {
  return (
    <>
      <section className="wrap pt-14 pb-4 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <h1 className="display !text-[clamp(2.25rem,1.4rem+3.4vw,3.5rem)]">
            Our clients come first.
          </h1>
          <div className="flex flex-col gap-5 lg:pt-3">
            <p className="lede">
              JMCole Group is an independent Medicare brokerage. Our team brings
              over 22 combined years of Medicare experience, so you're working
              with people who genuinely know this space.
            </p>
            <p className="body">
              With brokers in Eugene and Portland, we serve clients throughout
              Oregon. Because life doesn't always stay in one place, we're
              licensed in multiple states and can keep working with our clients
              wherever they go. When you work with us you're not just getting a
              broker, you're getting a long-term partner in your healthcare
              coverage.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2 mb-10">Meet the team</h2>
          <div className="flex flex-col gap-4">
            {brokers.map((broker) => (
              <Broker key={broker.name} broker={broker} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t section-sm" style={{ borderColor: "var(--line)" }}>
        <div className="wrap grid items-center gap-10 md:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">Part of the</span>
            <h2 className="h2 !text-[clamp(1.4rem,1.1rem+1.2vw,1.85rem)]">
              Medicare Plans Resource Center
            </h2>
            <p className="body">
              1011 Valley River Way, Suite #116A
              <br />
              Eugene, OR 97401
            </p>
            <div className="mt-2">
              <BasicButton
                text="Request a call"
                icon={<ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 16 }} />}
              />
            </div>
          </div>
          <img
            src="/mprc-logo.webp"
            alt="Medicare Plans Resource Center"
            className="w-full max-w-sm justify-self-start md:justify-self-end"
          />
        </div>
      </section>
    </>
  );
};

export default About;
