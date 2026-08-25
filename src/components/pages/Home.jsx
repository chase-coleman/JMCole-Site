import { useEffect } from "react";
import { useNavigate } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Marquee from "react-fast-marquee";
import { reviews } from "../../assets/reviews";
import { brokers } from "../../assets/brokers";
import { BasicButton, OutlinedButton } from "../individual/Button";

const carriers = [
  { src: "/Aflac-logo.webp", alt: "Aflac", href: "https://www.aflacmedicaresupplement.com/" },
  { src: "/Atrio-logo.webp", alt: "Atrio", href: "https://www.atriohp.com/" },
  { src: "/Devoted-logo.webp", alt: "Devoted", href: "https://www.devoted.com/" },
  { src: "/Humana-logo.webp", alt: "Humana", href: "https://www.humana.com/" },
  { src: "/Providence-logo.webp", alt: "Providence", href: "https://www.providencehealthplan.com/medicare/medicare-advantage-plans" },
  { src: "/PS-logo.webp", alt: "Pacific Source", href: "https://medicare.pacificsource.com/" },
  { src: "/Regence-logo.webp", alt: "Regence", href: "https://www.regence.com/medicare/plans" },
  { src: "/UHC-logo.webp", alt: "UHC", href: "https://www.uhc.com/medicare" },
  { src: "/Wellcare-logo.webp", alt: "Wellcare", href: "https://www.wellcare.com/en/medicare" },
];

const stats = [
  { value: "2016", label: "Serving Oregon seniors since" },
  { value: "22+", label: "Combined years of Medicare experience" },
  { value: "$0", label: "What our guidance costs you" },
  { value: "9", label: "Carriers represented" },
];

const questions = [
  {
    tag: "Coverage",
    q: "Should I go with a Medigap or an Advantage plan?",
    a: "Two different routes to Part C, with real trade-offs. We compare them against your doctors, your prescriptions, and your budget.",
    to: "/medicare-options",
  },
  {
    tag: "Plans",
    q: "What plans should I choose?",
    a: "Plans, networks and drug formularies vary by carrier. We'll walk you through what is actually available where you live.",
    to: "/medicare-options",
  },
  {
    tag: "Noise",
    q: "What about all the stuff they say on TV?",
    a: "Not every plan advertised nationally is offered in your area. We'll show you what you can actually enroll in.",
    to: "/medicare-faqs",
  },
  {
    tag: "Cost",
    q: "How much do I have to pay?",
    a: "Medicare is not free, and each part is priced differently. We'll go through the premiums, deductibles and penalty risks with you.",
    to: "/medicare-faqs",
  },
];

const initials = (name) =>
  name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();

const Home = () => {
  const navigate = useNavigate();

  // Flowbite auto-initialises on DOMContentLoaded, which can fire before React
  // has painted the carousel. Re-run it once this page is mounted.
  useEffect(() => {
    window.initFlowbite?.();
  }, []);

  return (
    <>
      {/* ─────────────────────────────── HERO ─────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* accent glow behind the headline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-14rem] h-[36rem] w-[64rem] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, rgb(4 68 108 / 9%) 0%, rgb(7 98 155 / 4%) 40%, transparent 72%)",
          }}
        />
        <div className="wrap relative pb-16 pt-16 sm:pt-24">
          <div className="flex flex-col items-center gap-6 text-center">

            <h1 className="display max-w-4xl">
              Medicare can be confusing.{" "}
              <span className="grad-text">It doesn't have to be.</span>
            </h1>

            <p className="lede measure">
              JMCole Group has been proudly serving Oregon seniors since 2016.
              We read the fine print, compare the carriers in your area, and
              stay with you long after you enroll.
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <BasicButton
                text="Request guidance"
                styling="btn-lg"
                icon={<ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 18 }} />}
              />
              <OutlinedButton text="Meet the team" styling="btn-lg" />
            </div>
          </div>

          {/* framed hero visual */}
          <div className="relative mx-auto mt-14 max-w-4xl">
            <div
              aria-hidden="true"
              className="absolute -inset-px rounded-[calc(var(--r-xl)+1px)] opacity-25 blur-[1px]"
              style={{ background: "var(--grad)" }}
            />
            <div
              className="relative overflow-hidden rounded-[var(--r-xl)] border"
              style={{ borderColor: "var(--line-strong)", background: "var(--surface)" }}
            >
              <div
                className="flex items-center gap-2 border-b px-4 py-3"
                style={{ borderColor: "var(--line)" }}
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--surface-3)" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--surface-3)" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--surface-3)" }} />
                <span className="mono ml-2" style={{ color: "var(--text-faint)" }}>
                  eugene · portland · statewide
                </span>
              </div>
              <img src="/multnomah.webp" alt="Multnomah Falls, Oregon" className="w-full" />
            </div>
          </div>

          {/* stat strip */}
          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="stat-value m-0">{stat.value}</dd>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─────────────────────────── CARRIER MARQUEE ──────────────────────── */}
      <section className="section-sm border-y" style={{ borderColor: "var(--line)" }}>
        <p className="mono mb-7 text-center" style={{ color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: ".16em" }}>
          We shop the carriers you already know
        </p>
        <div className="marquee-mask">
          <Marquee speed={38} pauseOnHover autoFill>
            {carriers.map((carrier) => (
              <img
                key={carrier.alt}
                className="carrier-logo"
                src={carrier.src}
                alt={carrier.alt}
                onClick={() => window.open(carrier.href, "_blank")}
              />
            ))}
          </Marquee>
        </div>
      </section>

      {/* ────────────────────────── QUESTIONS / BENTO ─────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="flex flex-col items-start gap-4">
            <span className="eyebrow">The questions everyone asks</span>
            <h2 className="h2 max-w-2xl">
              Let us help you — <span className="grad-text">for free</span>.
            </h2>
            <p className="lede measure">
              There is no charge for our guidance, ever. Here is what people
              bring to us first.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {questions.map((item, i) => (
              <button
                key={item.q}
                onClick={() => navigate(item.to)}
                className="card card-hover card-lit flex flex-col items-start gap-3 text-left"
              >
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="tag tag-blue">{item.tag}</span>
                  <span className="card-index">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="h3">{item.q}</h3>
                <p className="body">{item.a}</p>
                <span
                  className="mono mt-1 inline-flex items-center gap-1.5"
                  style={{ color: "var(--accent)" }}
                >
                  Read more
                  <ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 13 }} />
                </span>
              </button>
            ))}
          </div>

          {/* pull-quote panel */}
          <div className="card card-lit mt-4 flex flex-col items-center gap-5 !p-10 text-center md:flex-row md:text-left">
            <img
              src="/options.webp"
              alt="Medicare coverage options"
              className="w-full max-w-xs rounded-[var(--r)] md:w-2/5"
            />
            <div className="flex flex-col items-center gap-4 md:items-start">
              <span className="eyebrow eyebrow-green">No cost, no obligation</span>
              <h3 className="h2 !text-[clamp(1.5rem,1.1rem+1.6vw,2.1rem)]">
                That's where we come in.
              </h3>
              <p className="body measure">
                We know the plans and the networks in your area. We'll make sure
                you land somewhere that works for your doctors, your
                prescriptions, and your budget.
              </p>
              <BasicButton
                text="Talk to a broker"
                icon={<ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 16 }} />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── TESTIMONIALS ────────────────────────── */}
      <section className="section-sm border-y" style={{ borderColor: "var(--line)", background: "var(--bg-soft)" }}>
        <div className="wrap">
          {/* Flowbite wires the prev/next buttons by querying *inside* the
              [data-carousel] element, so the whole block lives in here. */}
          <div id="controls-carousel" data-carousel="static">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-3">
                <span className="eyebrow">From our clients</span>
                <h2 className="h2">Worth hearing from them.</h2>
              </div>
              <div className="flex gap-2">
                <button type="button" className="quote-nav" data-carousel-prev aria-label="Previous review">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m15 19-7-7 7-7" />
                  </svg>
                </button>
                <button type="button" className="quote-nav" data-carousel-next aria-label="Next review">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="card card-lit relative h-[19rem] overflow-hidden !p-0 sm:h-[15rem]">
              {reviews.map((review, idx) => (
                /* The first slide starts visible so the panel is never blank if
                   flowbite hasn't initialised yet. */
                <div key={idx} className={`${idx === 0 ? "" : "hidden"} h-full`} data-carousel-item>
                  <figure className="flex h-full flex-col items-start justify-center gap-4 p-7 sm:p-10">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="var(--accent)" opacity="0.35" aria-hidden="true">
                      <path d="M9.7 4.3 6.5 9.6h2.6v10H0V9.9L4.4 4.3h5.3Zm14.3 0-3.2 5.3h2.6v10h-9.1V9.9l4.4-5.6H24Z" />
                    </svg>
                    <blockquote className="body !text-[1.02rem] measure" style={{ color: "var(--text)" }}>
                      {review.text}
                    </blockquote>
                    <figcaption className="mono" style={{ color: "var(--text-faint)" }}>
                      — {review.name}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── TEAM ─────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">The people</span>
            <h2 className="h2 max-w-2xl">Meet the team.</h2>
            <p className="lede measure">
              Brokers in Eugene &amp; Portland, licensed across multiple states,
              so we can keep serving you wherever life goes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {brokers.map((broker) => (
              <div key={broker.name} className="card card-hover flex flex-col items-start gap-3 !p-5">
                <div
                  className="grid h-12 w-12 place-items-center rounded-[var(--r)] font-bold"
                  style={{ background: "var(--grad)", color: "#FFFFFF", fontFamily: "var(--mono)", fontSize: ".8rem" }}
                  aria-hidden="true"
                >
                  {initials(broker.name)}
                </div>
                <div>
                  <h3 className="h3 !text-base">{broker.name}</h3>
                  <p className="mono mt-1" style={{ color: "var(--text-faint)" }}>
                    {broker.position}
                  </p>
                </div>
                <a
                  href={`tel:${broker.phone}`}
                  className="text-sm transition-colors"
                  style={{ color: "var(--accent)" }}
                >
                  {broker.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── CLOSING CTA ─────────────────────────── */}
      <section className="wrap pb-24">
        <div
          className="relative overflow-hidden rounded-[var(--r-xl)] border px-6 py-14 text-center sm:px-14"
          style={{ borderColor: "var(--line-strong)", background: "var(--surface)" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(ellipse at center, rgb(82 105 27 / 10%) 0%, transparent 70%)",
            }}
          />
          <div className="relative flex flex-col items-center gap-5">
            <span className="eyebrow eyebrow-green">Part of the Medicare Plans Resource Center</span>
            <h2 className="h2 max-w-2xl">
              Get a real person on the phone.
            </h2>
            <p className="lede measure">
              Tell us where you are in the process. We'll take it from there —
              and it costs you nothing.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <BasicButton
                text="Request a call"
                styling="btn-lg"
                icon={<ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 18 }} />}
              />
              <a className="btn btn-ghost btn-lg" href="tel:541-554-8382">
                541-554-8382
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
