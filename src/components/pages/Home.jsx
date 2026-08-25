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

// Shared classes for the two carousel arrows so they stay identical
const arrowButton =
  "absolute top-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none";
const arrowGlyph =
  "inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-transparent transition-colors hover:border-[color:var(--green)]";

const Home = () => {
  const computerScreen = useMediaQuery({
    // used to display the image beside the copy only on larger screens
    query: "(min-width:1200px)",
  });

  const handleNav = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="page">
      {/* HERO */}
      <div className="content flex flex-col items-center gap-4">
        <h1 className="header">Medicare can be confusing —</h1>
        <h2 className="subheader">but it doesn't have to be.</h2>
        <p className="body-text prose text-center">
          JMCole Group has been proudly serving Oregon seniors since 2016.
        </p>
        <img
          src="/multnomah.webp"
          alt="multnomah"
          className="mt-2 w-full rounded-lg object-cover"
        />
        <div className="mt-2 flex flex-wrap justify-center gap-4 sm:gap-8">
          <BasicButton
            text="Request Guidance now"
            icon={<ArrowRightAltIcon />}
          />
          <OutlinedButton text="Meet The Team" icon={<ArrowRightAltIcon />} />
        </div>
      </div>

      {/* "LET US HELP YOU" BAND */}
      <section className="band" style={{ backgroundColor: "var(--blue)" }}>
        <div
          className="content flex items-center gap-8"
          style={{ color: "var(--text-white)" }}
        >
          {/* Renders the image to the left on larger screens */}
          {computerScreen && (
            <div className="w-2/3">
              <img src="/options.webp" alt="options" className="w-full" />
            </div>
          )}
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <h2 className="subheader" style={{ color: "var(--text-white)" }}>
              Let us help you - for free!
            </h2>
            {/* Renders the image in the middle on smaller screens */}
            {!computerScreen && (
              <img
                src="/options.webp"
                alt="options"
                className="w-9/10 max-w-lg"
              />
            )}
            <ul
              className="body-text flex list-disc flex-col gap-3 pl-5"
              style={{ color: "var(--text-white)" }}
            >
              <li>Should I go with a Medigap or an Advantage plan?</li>
              <li>What plans should I choose?</li>
              <li>What about all the stuff they say on TV?</li>
              <li>How much do I have to pay?</li>
            </ul>
            <p
              className="body-text underline"
              style={{
                color: "var(--text-white)",
                fontFamily: "var(--martian)",
              }}
            >
              That's where we come in.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS CAROUSEL */}
      <div className="content">
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          {/* <!-- Carousel wrapper --> */}
          <div
            className="relative h-[26rem] sm:h-90 overflow-hidden rounded-lg"
            data-carousel="static"
          >
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="hidden duration-2000 ease-in-out flex flex-col h-full items-center justify-center gap-2 px-12 sm:px-16"
                data-carousel-item
              >
                <p className="body-text max-w-[60ch] text-center italic">
                  "{review.text}"
                </p>
                <p className="body-text text-center font-semibold">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className={`${arrowButton} start-0`}
            data-carousel-prev
          >
            <span className={arrowGlyph}>
              <svg
                className="w-8 h-8 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="var(--green)"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className={`${arrowButton} end-0`}
            data-carousel-next
          >
            <span className={arrowGlyph}>
              <svg
                className="w-8 h-8 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="var(--green)"
                viewBox="0 0 24 24"
              >
                <path
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
      </div>

      {/* CARRIER LOGOS */}
      <div className="w-full overflow-hidden py-4">
        <Marquee speed={50} pauseOnHover>
          {imgs.map(img => (
            <img
              key={img.alt}
              className="h-15 w-auto mx-8 object-contain hover:cursor-pointer"
              src={img.src}
              alt={img.alt}
              onClick={() => handleNav(img.href)}
            />
          ))}
        </Marquee>
      </div>

      {/* TEAM BAND */}
      <section className="band" style={{ backgroundColor: 'var(--green)' }}>
        <div className="content" style={{ color: 'var(--text-white)' }}>
          <h2 className="header mb-10" style={{ color: 'var(--text-white)' }}>
            Meet The Team
          </h2>
          <div className="body-text flex flex-wrap justify-center gap-10 sm:gap-15">
            {brokers.map(broker => (
              <div key={broker.name} className="flex w-36 flex-col items-center gap-2 text-center">
                <div className="h-36 w-28 rounded-2xl bg-white/95 shadow-md" />
                <span className="font-semibold">{broker.name}</span>
                <a
                  className="underline"
                  href={broker.phone}
                  style={{ color: 'var(--text-white)' }}
                >
                  {broker.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MPRC */}
      <div className="content flex flex-col items-center gap-3 text-center">
        <h2 className="subheader">A Part of the Medicare Plans Resource Center</h2>
        <img src="/mprc-logo.webp" alt="mprc" className="w-full sm:w-1/2" />
        <p className="body-text">1011 Valley River Way, Suite #116A</p>
        <p className="body-text">Eugene, OR, 97401</p>
      </div>
    </div>
  );
};

export default Home;
