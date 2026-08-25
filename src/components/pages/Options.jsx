import { Link, useParams } from "react-router";
import MedigapPlan from "../individual/MedigapPlan";
import AdvantagePlan from "../individual/AdvantagePlan";
import DrugPlan from "../individual/DrugPlan";
import { BasicButton } from "../individual/Button";
import PhoneIcon from "@mui/icons-material/Phone";

const planTypes = [
  {name: "Advantage Plans", id: 1, url: "advantage-plans"},
  {name: "Medigap Plans", id: 2, url: "medigap-plans"},
  {name: "Drug Plans", id: 3, url: "drug-plans"}
]

const planComponents = {
  "medigap-plans": <MedigapPlan />,
  "drug-plans": <DrugPlan />,
  "advantage-plans": <AdvantagePlan />
}


const Options = () => {
  const { type = "advantage-plans" } = useParams()

  return (
    <div className="page">
      <div className="content flex flex-col items-center gap-8">
        <nav className="subheader !text-[1rem] sm:!text-[1.25rem] lg:!text-[1.5rem] flex flex-wrap justify-center gap-x-8 gap-y-3">
          {planTypes.map(planType => (
            <Link
              key={planType.id}
              to={planType.url}
              className={`selected-option ${type === planType.url ? "active" : ""}`}
            >
              {planType.name}
            </Link>
          ))}
        </nav>

        <div className="body-text prose flex w-full flex-col gap-4">
          {/* Renders the appropriate component conditionally. ?? handles fallback incase url is just medicare-options/null */}
          {planComponents[type] ?? <AdvantagePlan/>}
        </div>

        <BasicButton
          text="Request A Call"
          icon={<PhoneIcon fontSize="small" />}
        />
      </div>
    </div>
  )
}
export default Options;
