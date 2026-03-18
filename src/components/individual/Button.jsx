import Button from "@mui/material/Button";
import { useMediaQuery } from 'react-responsive'


export const BasicButton = ({ text, icon }) => {
  const notPhone = useMediaQuery({ // used to display the icon only on larger screens, not on smaller phone screens.
      query: '(min-width:473px)'
    })
  return (
    <Button
      variant="contained"
      className="btn-default"
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
  const notPhone = useMediaQuery({ 
    query: '(min-width:473px)'
  })

  return (
    <Button
      variant="contained"
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

