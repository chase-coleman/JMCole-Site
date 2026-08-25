import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="wrap flex flex-1 flex-col items-center justify-center gap-5 py-32 text-center">
      <span className="eyebrow">Error</span>
      <p
        className="m-0 font-bold leading-none"
        style={{
          fontFamily: "var(--mono)",
          fontSize: "clamp(4rem, 16vw, 9rem)",
          letterSpacing: "-.04em",
        }}
      >
        <span className="grad-text">404</span>
      </p>
      <h1 className="h2">We couldn't find that page.</h1>
      <p className="lede measure">
        The page may have moved, or it never existed. Head back and we'll get you
        where you were going.
      </p>
      <button className="btn btn-primary btn-lg mt-2" onClick={() => navigate("/")}>
        Back to home
      </button>
    </section>
  );
};

export default NotFound;
