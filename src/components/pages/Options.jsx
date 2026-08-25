import { Link, useParams } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MedigapPlan from "../individual/MedigapPlan";
import AdvantagePlan from "../individual/AdvantagePlan";
import DrugPlan from "../individual/DrugPlan";
import { BasicButton } from "../individual/Button";

const planTypes = [
  { name: "Advantage", id: 1, url: "advantage-plans" },
  { name: "Medigap", id: 2, url: "medigap-plans" },
  { name: "Drug Plans", id: 3, url: "drug-plans" },
];

const planComponents = {
  "medigap-plans": <MedigapPlan />,
  "drug-plans": <DrugPlan />,
  "advantage-plans": <AdvantagePlan />,
};

const planTitles = {
  "medigap-plans": "Medigap / Supplement",
  "drug-plans": "Prescription Drug Plans",
  "advantage-plans": "Medicare Advantage",
};

const Options = () => {
  const { type = "advantage-plans" } = useParams();
  const active = planComponents[type] ? type : "advantage-plans";

  return (
    <>
      <section className="wrap pt-16 pb-10 sm:pt-20">
        <div className="flex flex-col gap-5">
          <h1 className="display !text-[clamp(2.25rem,1.4rem+3.4vw,3.5rem)]">
            Medicare options
          </h1>
          <p className="lede measure">
            Three routes, each with its own trade-offs. Pick one to see how it
            works.
          </p>
        </div>

        <nav className="mt-9" aria-label="Plan types">
          <div className="tabs">
            {planTypes.map((planType) => (
              <Link
                key={planType.id}
                to={planType.url}
                className={`tab ${active === planType.url ? "is-active" : ""}`}
                aria-current={active === planType.url ? "page" : undefined}
              >
                {planType.name}
              </Link>
            ))}
          </div>
        </nav>
      </section>

      <section className="wrap pb-20">
        <div className="flex items-center gap-3 pb-6">
          <span className="mono" style={{ color: "var(--text-faint)" }}>
            {planTitles[active]}
          </span>
          <hr className="hairline flex-1" />
        </div>
        {/* Renders the appropriate component; falls back to Advantage plans
            if the url segment isn't one we know. */}
        {planComponents[active]}
      </section>

      <section className="border-t section-sm" style={{ borderColor: "var(--line)", background: "var(--surface-2)" }}>
        <div className="wrap flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="h2 !text-[clamp(1.4rem,1.1rem+1.2vw,1.85rem)]">
              Not sure which one fits?
            </h2>
            <p className="body">
              Tell us about your doctors, your prescriptions and your budget, and
              we'll narrow it down with you.
            </p>
          </div>
          <div className="flex-none">
            <BasicButton
              text="Request a call"
              icon={<ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 16 }} />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Options;
