import Button from "@mui/material/Button";

export const BasicButton = ({ text, icon }) => {
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
      {text}{icon}
    </Button>
  );
};

export const OutlinedButton = ({ text, icon }) => {
  return (
    <Button
      variant="contained"
      className="btn-outlined"
      sx={{
        fontSize: ".7rem",
        fontWeight: 600,
        backgroundColor: "transparent !important",
        color: "var(--red)",
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
      {text}{icon}
    </Button>
  );
};

