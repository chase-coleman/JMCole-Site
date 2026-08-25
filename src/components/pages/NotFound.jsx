const NotFound = () => {
  return (
    <div className="page justify-center flex-1">
      <div className="content flex flex-col items-center gap-4 text-center">
        <span
          className="header !text-[clamp(3.5rem,14vw,7rem)] leading-none"
          style={{ color: "var(--blue)" }}
          aria-hidden="true"
        >
          404
        </span>
        <h1 className="subheader">We couldn't find that page</h1>
        <p className="body-text prose">
          The page you're looking for may have moved or no longer exists. Use the
          menu above to get back on track.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
