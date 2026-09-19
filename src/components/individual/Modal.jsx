import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { textOptions } from "../../data/constants";

const ModalBox = ({ status, setShowModal }) => {
  const content = status ? textOptions.success : textOptions.failure;

  return (
    <Box className={`modal-box ${status ? "modal-success" : "modal-error"}`}>
      <IconButton
        aria-label="Close"
        size="small"
        onClick={() => setShowModal(false)}
        sx={{ position: "absolute", top: 10, right: 10, color: "var(--text-faint)" }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      {/* Conditionally shows success or error messaging */}
      <div className="modal-icon" aria-hidden="true">
        {status ? <CheckIcon fontSize="small" /> : <PriorityHighIcon fontSize="small" />}
      </div>

      <h2 id="modal-modal-title" className="h3">
        {content.title}
      </h2>
      <p id="modal-modal-description" className="body mt-2">
        {content.description}
      </p>

      <button
        className="btn btn-ghost mt-6 w-full"
        onClick={() => setShowModal(false)}
      >
        Close
      </button>
    </Box>
  );
};

export default ModalBox;
