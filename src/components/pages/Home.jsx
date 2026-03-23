import { BasicButton, OutlinedButton } from "../individual/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useMediaQuery } from "react-responsive";
import { reviews } from "../../assets/reviews";
import Marquee from "react-fast-marquee";
import { brokers } from "../../assets/brokers"

const imgs = [
  { src: "/Aflac-logo.webp", alt: "Aflac", href: "https://www.aflacmedicaresupplement.com/"},
  { src: "/Atrio-logo.webp", alt: "Atrio", href: "https://www.atriohp.com/"},
  { src: "/Devoted-logo.webp", alt: "Devoted", href: "https://www.devoted.com/"},
  { src: "/Humana-logo.webp", alt: "Humana", href: "https://www.humana.com/"},
  { src: "/Providence-logo.webp", alt: "Providence", href: "https://www.providencehealthplan.com/medicare/medicare-advantage-plans"},
  { src: "/PS-logo.webp", alt: "Pacific Source", href: "https://medicare.pacificsource.com/"},
  { src: "/Regence-logo.webp", alt: "Regence", href: "https://www.regence.com/medicare/plans"},
  { src: "/UHC-logo.webp", alt: "UHC", href: "https://www.uhc.com/medicare"},
  { src: "/Wellcare-logo.webp", alt: "Wellcare", href: "https://www.wellcare.com/en/medicare"},
];


const Home = () => {
  const computerScreen = useMediaQuery({
    // used to display the icon only on larger screens, not on smaller phone screens.
    query: "(min-width:1200px)",
  });

  const handleNav = (url) => {
    window.open(url, '_blank')
  }

  return (
    <>
      <div className="flex flex-col items-center ml-9 mr-9 mt-5 gap-5">
        <div>
          <h1 className="header">Medicare can be confusing —</h1>
        </div>
        <div>
          <h2 className="subheader">but it doesn't have to be.</h2>
        </div>
        <div className="flex text-center">
          <span className="body-text">
            JMCole Group has been proudly serving Oregon seniors since 2016.
          </span>
          {/* <span className="body-text">
            Proudly serving Oregon seniors since 2016.
          </span> */}
        </div>
        <div className="p-2 w-screen lg:w-full sm:mt-2">
          <img
            src="/multnomah.webp"
            alt="multnomah"
            className="mx-auto w-full"
          />
        </div>
        <div className="flex gap-10">
          <BasicButton
            text="Request Guidance now"
            icon={<ArrowRightAltIcon />}
          />
          <OutlinedButton text="Meet The Team" icon={<ArrowRightAltIcon />} />
        </div>
        <div
          className="flex items-center w-screen mt-4 p-8 min-h-125"
          style={{ backgroundColor: "var(--blue)"}}
        >
          {computerScreen && (
            <>
              <div className="w-2/3">
                <img src="/options.webp" alt="options" />
              </div>
            </>
          )}{" "}
          {/* Renders the image to the left on larger screens*/}
          <div
            className="flex flex-col justify-center items-center w-full gap-10"
            style={{ color: "var(--text-white)" }}
          >
            <h1
              className="subheader sm:!text-2xl"
              style={{ color: "var(--text-white)" }}
            >
              Let us help you - for free!
            </h1>
            {!computerScreen && (
              <>
                <div className="flex justify-center w-full">
                  <img src="/options.webp" alt="options" className="w-9/10" />
                </div>
              </>
            )}{" "}
            {/* Renders the image in the middle on smaller screens*/}
            <ul
              className="body-text list-disc flex flex-col gap-3"
              style={{ color: "var(--text-white)" }}
            >
              <li>Should I go with a Medigap or an Advantage plan?</li>
              <li>What plans should I choose?</li>
              <li>What about all the stuff they say on TV?</li>
              <li>How much do I have to pay?</li>
            </ul>
            <h3
              className="body-text text-start underline"
              style={{
                color: "var(--text-white)",
                fontFamily: "var(--martian)",
              }}
            >
              That's where we come in.
            </h3>
          </div>
        </div>
        <div
          id="controls-carousel"
          className="relative w-screen sm:w-full"
          data-carousel="static"
        >
          {/* <!-- Carousel wrapper --> */}
          <div
            className="relative h-90 overflow-hidden rounded-base"
            data-carousel="static"
          >
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="hidden duration-2000 ease-in-out flex flex-col h-full items-center justify-center"
                data-carousel-item
              >
                <span
                  className="body-text w-2/3 p-3 italic font-md md:font-xl"
                  style={{ lineHeight: 1.3 }}
                >
                  "{review.text}"
                </span>
                <span
                  className="body-text w-2/3 p-3 font-md md:font-xl"
                  style={{ lineHeight: 1.3 }}
                >
                  -{review.name}
                </span>
              </div>
            ))}
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-base hover:border-2 hover:border-[color:var(--green)]">
              <svg
                className="w-12 h-12 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="var(--green)"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-base hover:border-2 hover:border-[color:var(--green)]">
              <svg
                className="w-10 h-10 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="var(--green)"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
        <div
          className="h-40 w-screen overflow-hidden" 
        >
          <Marquee speed={50} pauseOnHover>
            {imgs.map(img => (
              <img key={img.alt} className ="h-15 w-auto ml-6 mr-6 hover:cursor-pointer" src={img.src} alt={img.alt} onClick={() => handleNav(img.href)}/>
            ))}
          </Marquee>
        </div>
        <div className="flex flex-col justify-center gap-2 w-screen p-3 pt-5 min-h-125" style={{backgroundColor: 'var(--green)'}}>
          <h2 className="header mb-8" style={{color: 'var(--text-white)'}}>Meet The Team</h2>
          <div className="body-text flex flex-wrap justify-center gap-10 sm:gap-15" style={{color: 'var(--text-white)'}}>
          {brokers.map(broker => (
            <div key={broker.name} className="flex flex-col items-center gap-2">
              <div className="bg-white w-24 h-36" style={{borderRadius: '75px'}}></div>
              <span >{broker.name}</span>
              <a className="underline  uppercase text-blue-500" href={broker.phone} style={{fontSize: '18px', color: 'var(--text-white)'}}>{broker.phone}</a>
            </div>
          ))}
          </div>
        </div>
        <div className="flex flex-col items-center w-full p-8">
          <h1 className="subheader">A Part of the Medicare Plans Resource Center</h1>
          <img src="/mprc-logo.webp" alt="mprc" className="w-full sm:w-1/2"/>
          <span className="body-text">1011 Valley River Way, Suite #116A</span>
          <span className="body-text">Eugene, OR, 97401</span>
        </div>
      </div>
    </>
  );
};

export default Home;
