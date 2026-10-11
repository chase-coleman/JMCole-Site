import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { BasicButton } from "./Button";
import { planComparisonUrl } from "../../data/constants";

// Green button linking out to our plan comparison site.
const PlanComparisonSiteButton = ({ styling = "" }) => {
  return (
    <BasicButton
      text="Looking for a plan? Visit our plan comparison website"
      styling={`btn-green !whitespace-normal !leading-snug ${styling}`}
      href={planComparisonUrl}
      icon={<OpenInNewIcon sx={{ fontSize: 14 }} aria-hidden="true" />}
    />
  );
};

export default PlanComparisonSiteButton;
