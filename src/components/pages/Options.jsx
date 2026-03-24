import { Link, useParams } from "react-router";
import MedigapPlan from "../individual/MedigapPlan";
import AdvantagePlan from "../individual/AdvantagePlan";
import DrugPlan from "../individual/DrugPlan";
import { BasicButton } from "../individual/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import Divider from "@mui/material/Divider";

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
    <>
    <div className="flex flex-col items-center ml-9 mr-9 mt-5 gap-10 mb-5">
      <div className="subheader !text-[15px] sm:!text-[20px] lg:!text-[28px] flex gap-6">
      {planTypes.map(planType => (
        <Link key={planType.id} to={planType.url} className={`selected-option ${type === planType.url ? "active" : ""}`}>{planType.name}</Link>
      ))}
      </div>
      <div className="body-text w-full flex flex-col gap-4">
        {/* Renders the appropriate component conditionally. ?? handles fallback incase url is just medicare-options/null */}
        {planComponents[type] ?? <AdvantagePlan/>} 
      </div>
      <BasicButton
              text="Request A Call"
              icon={<PhoneIcon fontSize="small" />}
            />
    </div>
    </>
  )
}
export default Options;