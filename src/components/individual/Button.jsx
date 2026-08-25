import Button from "@mui/material/Button";
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from "react-router";

// Shared sizing so the filled and outlined buttons always line up side by side
const baseSx = {
  fontSize: { xs: ".75rem", sm: ".8rem" },
  fontWeight: 600,
  letterSpacing: ".04em",
  lineHeight: 1.3,
  borderRadius: "var(--radius)",
  px: { xs: 1.75, md: 2.5 },
  py: { xs: 1, md: 1.25 },
  gap: 0.5,
  whiteSpace: "nowrap",
};

export const BasicButton = ({ text, icon, styling }) => {
  const navigate = useNavigate()
  const notPhone = useMediaQuery({ // used to display the icon only on larger screens, not on smaller phone screens.
      query: '(min-width:473px)'
    })
  return (
    <Button
      variant="contained"
      onClick={() => navigate('/contact')}
      className={"btn-default" + " " + styling}
      sx={{
        ...baseSx,
        backgroundColor: "var(--green)",
        color: "var(--text-white)",
      }}
    >
      {text}{notPhone && icon}
    </Button>
  );
};

export const OutlinedButton = ({ text, icon }) => {
  const navigate = useNavigate()
  const notPhone = useMediaQuery({
    query: '(min-width:473px)'
  })

  return (
    <Button
      variant="contained"
      onClick={() => navigate("/about")}
      className="btn-outlined"
      sx={{
        ...baseSx,
        backgroundColor: "transparent",
        color: "var(--blue)",
        border: "2px solid",
        borderColor: "var(--blue)",
        boxShadow: "none",
      }}
    >
      {text}{notPhone && icon}
    </Button>
  );
};
