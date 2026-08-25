import Broker from "../individual/BrokerProfile"
import { brokers } from "../../assets/brokers"
import { BasicButton } from "../individual/Button";
import PhoneIcon from '@mui/icons-material/Phone';

const About = () => {
  return (
    <div className="page">
      <div className="content body-text prose flex flex-col gap-4">
        <p>
          JMCole Group is an independent Medicare brokerage built on one
          simple principle: our clients come first. Our team brings over 22
          combined years of Medicare experience, giving you the confidence
          that you're working with people who truly know this space.
        </p>
        <p>
          With brokers in Eugene & Portland, Oregon, we serve clients throughout the
          state - and because life doesn't always stay in one place, we are
          licensed in multiple states so we can continue serving our clients
          wherever they go. When you work with us, you're not just getting a
          broker - you're getting a long-term partner in your healthcare
          coverage.
        </p>
      </div>

      <div className="content flex flex-col items-center gap-8">
        <h1 className="header">Meet The Team</h1>
        {brokers.map(broker => (
          <Broker key={broker.name} broker={broker} />
        ))}
      </div>

      <div className="content flex flex-col items-center gap-3 text-center">
        <h2 className="subheader">A Part of the Medicare Plans Resource Center</h2>
        <img src="/mprc-logo.webp" alt="mprc" className="w-full sm:w-1/2" />
        <p className="body-text">1011 Valley River Way, Suite #116A</p>
        <p className="body-text">Eugene, OR, 97401</p>
      </div>

      <BasicButton text="Request A Call" icon={<PhoneIcon fontSize='small'/>} />
    </div>
  );
};

export default About;
