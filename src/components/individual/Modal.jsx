import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const textOptions = {
  success: {
    title: "Your request has been submitted successfully.",
    description: "One of our brokers will be calling you as soon as possible!"
  },
  failure: {
    title: "There was an issue submitting your request.",
    description: "Please try again, or give us a call directly at 541-554-8382!"
  }
}

const ModalBox = ({ status, setShowModal }) => {
  const content = status ? textOptions.success : textOptions.failure;

  return (
    <Box className={`modal-box ${status ? "modal-success" : "modal-error"}`}>
      <IconButton
        aria-label="Close"
        size="small"
        onClick={() => setShowModal(false)}
        sx={{ position: "absolute", top: 8, right: 8, color: "var(--text-white)" }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      {/* Conditionally shows success or error messages */}
      <Typography
        id="modal-modal-title"
        component="h2"
        sx={{ pr: 4, fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.35 }}
      >
        {content.title}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 1.5, lineHeight: 1.5 }}>
        {content.description}
      </Typography>
    </Box>
  );
};

export default ModalBox;
