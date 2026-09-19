import { useNavigate } from "react-router";
import { notFoundError } from "../../data/constants";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="wrap flex flex-1 flex-col items-center justify-center gap-5 py-32 text-center">
      <p
        className="m-0 font-bold leading-none"
        style={{
          fontFamily: "var(--mono)",
          fontSize: "clamp(4rem, 16vw, 9rem)",
          letterSpacing: "-.04em",
        }}
      >
        404
      </p>
      <h1 className="h2">We couldn't find that page.</h1>
      <p className="lede measure">
        {notFoundError}
      </p>
      <button className="btn btn-primary btn-lg mt-2" onClick={() => navigate("/")}>
        Back to home
      </button>
    </section>
  );
};

export default NotFound;
