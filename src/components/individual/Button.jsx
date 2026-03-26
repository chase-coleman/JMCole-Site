import Button from "@mui/material/Button";
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from "react-router";

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
        fontSize: ".7rem",
        backgroundColor: "var(--green)",
        color: "var(--text-white)",
        lineHeight: 1.3,
        padding: 2,
        "@media screen and (max-width: 1010px)": {
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
          paddingBottom: 1,
        },
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
        fontSize: ".7rem",
        fontWeight: 600,
        backgroundColor: "transparent",
        color: "var(--blue)",
        border: '2px solid',
        borderColor: "var(--red)",
        lineHeight: 1.3,
        padding: 2,
        "@media screen and (max-width: 1010px)": {
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
          paddingBottom: 1,
        },
        boxShadow: 'none',
      }}
    >
      {text}{notPhone && icon}
    </Button>
  );
};

