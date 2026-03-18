import { BasicButton, OutlinedButton } from "../individual/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useMediaQuery } from "react-responsive";
import { reviews } from "../../assets/reviews";

const Home = () => {
  const computerScreen = useMediaQuery({
    // used to display the icon only on larger screens, not on smaller phone screens.
    query: "(min-width:1200px)",
  });

  return (
    <>
      <div className="flex flex-col items-center h-screen ml-9 mr-9 mt-5  gap-5">
        <div>
          <h1 className="header">Medicare can be confusing —</h1>
        </div>
        <div>
          <h2 className="subheader">but it doesn't have to be.</h2>
        </div>
        <div className="flex text-center">
          <span className="body-text">
            Proudly serving Oregon seniors since 2016.
          </span>
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
          className="flex w-screen mt-4 p-8"
          style={{ backgroundColor: "var(--blue)" }}
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
                  style={{ lineHeight: 1.3}}
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
      </div>
    </>
  );
};

export default Home;
