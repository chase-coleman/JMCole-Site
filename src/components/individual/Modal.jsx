import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
  return (
    <>
      <div>
        <Box className={!status ? "modal-error" : "modal-success"}>
          <button
              className="absolute top-2 right-2 hover:cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <CloseIcon />
            </button>
            {/* Conditionally shows success or error messages */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {!status ? textOptions.failure.title : textOptions.success.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {!status ? textOptions.failure.description : textOptions.success.description}
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default ModalBox;
