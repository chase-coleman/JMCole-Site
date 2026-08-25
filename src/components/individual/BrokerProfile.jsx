const Broker = ({ broker }) => {
  return (
    <article className="card grid gap-6 !p-6 sm:!p-8 md:grid-cols-[14rem_1fr]">
      <img
        src="/chase-main.webp"
        alt={broker.name}
        className="aspect-[4/5] w-full rounded-[var(--r)] object-cover"
        style={{ border: "1px solid var(--line)" }}
      />

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="h3">{broker.name}</h3>
          <p className="mt-1 text-sm" style={{ color: "var(--text-faint)" }}>
            {broker.position}
          </p>
        </div>

        <p className="body measure">{broker.bio}</p>

        <div className="mt-auto flex flex-wrap gap-x-8 gap-y-2 pt-2">
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
