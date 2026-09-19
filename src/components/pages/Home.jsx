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

const questions = [
  {
    q: "Should I go with a Medigap or an Advantage plan?",
    a: "They work very differently, and the cheaper one is not always the better one. We go through both with you.",
    to: "/medicare-options",
  },
  {
    q: "What plans should I choose?",
    a: "It depends on your doctors, your prescriptions and your county. No one plan is best for everybody.",
    to: "/medicare-options",
  },
  {
    q: "What about all the stuff they say on TV?",
    a: "A lot of those ads are national. The plan being advertised may not even be sold where you live.",
    to: "/medicare-faqs",
  },
  {
    q: "How much do I have to pay?",
    a: "Medicare is not free, and each part is priced differently. We will go through the actual numbers with you.",
    to: "/medicare-faqs",
  },
];

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
      <section className="wrap pt-14 pb-16 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col items-start gap-6">
            <h1 className="display">
              Medicare can be confusing.
              <br />
              <span className="marker">It doesn't have to be.</span>
            </h1>

            <p className="lede measure">
              We're an independent Medicare brokerage with brokers in Eugene and
              Portland. We've been helping Oregon seniors work through this since
              2016, and we don't charge you a dime for it.
            </p>

            <div className="mt-1 flex flex-wrap items-center gap-3">
              <BasicButton
                text="Request a call"
                styling="btn-lg"
                icon={<ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 18 }} />}
              />
              <a className="btn btn-ghost btn-lg" href="tel:541-554-8382">
                541-554-8382
              </a>
            </div>

            <dl className="mt-6 flex flex-wrap gap-x-12 gap-y-6">
              <div>
                <dt className="stat-label">Serving Oregon since</dt>
                <dd className="stat-value m-0 mt-1">2016</dd>
              </div>
              <div>
                <dt className="stat-label">Combined years of experience</dt>
                <dd className="stat-value m-0 mt-1">22</dd>
              </div>
              <div>
                <dt className="stat-label">What you pay us</dt>
                <dd className="stat-value m-0 mt-1">Nothing</dd>
              </div>
            </dl>
          </div>

          <figure className="m-0">
            <img
              src="/multnomah.webp"
              alt="Multnomah Falls"
              className="w-full rounded-[var(--r-lg)]"
              style={{ border: "1px solid var(--line)" }}
            />
            <figcaption className="mono mt-3" style={{ color: "var(--text-faint)" }}>
              Multnomah Falls, Oregon
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ─────────────────────────── CARRIER MARQUEE ──────────────────────── */}
      <section className="section-sm border-y" style={{ borderColor: "var(--line)" }}>
        <p className="mb-7 text-center text-sm" style={{ color: "var(--text-faint)" }}>
          Some of the carriers we work with
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

      {/* ────────────────────────────── QUESTIONS ─────────────────────────── */}
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col items-start gap-5">
            <h2 className="h2">Let us help you. It's free.</h2>
            <p className="body measure">
              These are the questions we get asked first, almost every time.
            </p>
            <img
              src="/options.webp"
              alt="Medicare coverage options"
              className="mt-2 w-full max-w-sm rounded-[var(--r-lg)]"
              style={{ border: "1px solid var(--line)" }}
            />
          </div>

          <div>
            {questions.map((item) => (
              <button
                key={item.q}
                onClick={() => navigate(item.to)}
                className="group block w-full border-b py-6 text-left first:pt-0"
                style={{ borderColor: "var(--line)" }}
              >
                <h3 className="h3 !text-[1.15rem] transition-colors group-hover:text-[color:var(--accent)]">
                  {item.q}
                </h3>
                <p className="body mt-2">{item.a}</p>
              </button>
            ))}
            <p className="body mt-8">
              That's where we come in. We know the plans and the networks in your
              area, and we'll make sure you end up somewhere that works for your
              doctors, your needs and your budget.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── TESTIMONIALS ────────────────────────── */}
      <section className="section-sm border-y" style={{ borderColor: "var(--line)", background: "var(--surface-2)" }}>
        <div className="wrap">
          {/* Flowbite wires the prev/next buttons by querying *inside* the
              [data-carousel] element, so the whole block lives in here. */}
          <div id="controls-carousel" data-carousel="static">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <h2 className="h2 !text-[clamp(1.5rem,1.1rem+1.6vw,2.1rem)]">
                What our clients say
              </h2>
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

            <div className="relative h-[17rem] overflow-hidden sm:h-[13rem]">
              {reviews.map((review, idx) => (
                /* The first slide starts visible so the panel is never blank if
                   flowbite hasn't initialised yet. */
                <div key={idx} className={`${idx === 0 ? "" : "hidden"} h-full`} data-carousel-item>
                  <figure className="flex h-full flex-col justify-center gap-4">
                    <blockquote
                      className="measure m-0 text-[1.05rem] leading-relaxed"
                      style={{ color: "var(--text)" }}
                    >
                      "{review.text}"
                    </blockquote>
                    <figcaption className="text-sm" style={{ color: "var(--text-faint)" }}>
                      {review.name}
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
            <h2 className="h2">Meet the team</h2>
            <p className="body measure">
              Brokers in Eugene and Portland, licensed in multiple states so we
              can keep working with you if you move.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {brokers.map((broker) => (
              <li key={broker.name} className="flex flex-col gap-1">
                <img
                  src={broker.img}
                  alt={broker.name}
                  className="h-full w-full rounded-[var(--r)] object-cover"
                  style={{ border: "1px solid var(--line)" }}
                />
                <h3 className="h3 !text-base">{broker.name}</h3>
                <a
                  href={`tel:${broker.phone}`}
                  className="mt-1 text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  {broker.phone}
                </a>
                <p className="text-xs">NPN: {broker.npn}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ──────────────────────────── CLOSING CTA ─────────────────────────── */}
      <section
        className="border-t section-sm"
        style={{ borderColor: "var(--line)", background: "var(--surface-2)" }}
      >
        <div className="wrap flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="h2 !text-[clamp(1.4rem,1.1rem+1.2vw,1.85rem)]">
              Request a call, or just call us yourself.
            </h2>
            <p className="body">
              We'll answer your questions. You pay us nothing for our services.
              Ever.
            </p>
          </div>
          <div className="flex flex-none flex-wrap gap-3">
            <BasicButton
              text="Request a call"
              icon={<ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 16 }} />}
            />
            <a className="btn btn-ghost" href="tel:541-554-8382">
              541-554-8382
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
