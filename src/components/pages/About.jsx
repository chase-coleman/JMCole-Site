import Broker from "../individual/BrokerProfile"
import { brokers } from "../../assets/brokers"
import { BasicButton } from "../individual/Button";
import PhoneIcon from '@mui/icons-material/Phone';

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center ml-9 mr-9 mt-5 gap-10 mb-5">
        <div className="body-text w-screen p-4 sm:p-8" style={{ lineHeight: 1.5 }}>
          <p>
            JMCole Group is an independent Medicare brokerage built on one
            simple principle: our clients come first. Our team brings over 22
            combined years of Medicare experience, giving you the confidence
            that you're working with people who truly know this space.{" "}
          </p>
          <p>
            Based in Eugene & Portland, Oregon, we serve clients throughout the
            state - and because life doesn't always stay in one place, we are
            licensed in multiple states so we can continue serving our clients
            wherever they go. When you work with us, you're not just getting a
            broker - you're getting a long-term partner in your healthcare
            coverage.
          </p>
        </div>
        <div className="flex flex-col items-center w-full gap-5">
          <h1 className="header">Meet The Team</h1>
          {brokers.map(broker => (
            <Broker key={broker.name} broker={broker} background={broker.background}/>
          ))}
        </div>
          <div className="body-text flex flex-col items-center w-full p-8">
          <h1 className="subheader">A Part of the Medicare Plans Resource Center</h1>
          <img src="/mprc-logo.webp" alt="mprc" className="w-full sm:w-1/2"/>
          <span className="!text-xl">1011 Valley River Way, Suite #116A</span>
          <span className="!text-xl">Eugene, OR, 97401</span>
        </div>
        <BasicButton text="Request A Call" icon={<PhoneIcon fontSize='small'/>} />
      </div>
    </>
  );
};

export default About;
