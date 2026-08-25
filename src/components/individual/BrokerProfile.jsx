const initials = (name) =>
  name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();

const Broker = ({ broker, index = 0 }) => {
  return (
    <article className="card card-hover card-lit grid gap-6 !p-6 sm:!p-8 md:grid-cols-[15rem_1fr]">
      <div className="flex flex-col gap-4">
        <img
          src="/chase-main.webp"
          alt={broker.name}
          className="aspect-[4/5] w-full rounded-[var(--r)] object-cover"
          style={{ border: "1px solid var(--line)" }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="grid h-10 w-10 flex-none place-items-center rounded-[var(--r-sm)] font-bold"
              style={{ background: "var(--grad)", color: "#FFFFFF", fontFamily: "var(--mono)", fontSize: ".72rem" }}
              aria-hidden="true"
            >
              {initials(broker.name)}
            </span>
            <div>
              <h3 className="h3">{broker.name}</h3>
              <span className="tag tag-green mt-1.5 inline-block">{broker.position}</span>
            </div>
          </div>
          <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
        </div>

        <p className="body measure">{broker.bio}</p>

        <hr className="hairline" />

        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <a href={`mailto:${broker.email}`} className="text-sm break-all" style={{ color: "var(--accent)" }}>
            {broker.email}
          </a>
          <a href={`tel:${broker.phone}`} className="text-sm" style={{ color: "var(--accent)" }}>
            {broker.phone}
          </a>
        </div>
      </div>
    </article>
  );
};

export default Broker;
