const Broker = ({ broker }) => {
  return (
    <article
      className="broker-card card grid gap-6 !p-6 sm:!p-8 md:grid-cols-[14rem_1fr]"
      style={{ background: broker.background }}
    >
      <div className="flex flex-col gap-2">
        <img
          src={broker.img}
          alt={broker.name}
          className="h-3/4 w-full rounded-[var(--r)] object-cover"
          style={{ border: "1px solid var(--line)" }}
        />
        <p className="mono !text-[.5rem]">NPN: {broker.npn}</p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="h3">{broker.name}</h3>
          <p className="broker-position mt-1 text-sm">{broker.position}</p>
        </div>

        <hr className="broker-divider" />

        <p className="body measure">{broker.bio}</p>

        <hr className="broker-divider" />

        <div className="mt-auto flex flex-wrap gap-x-8 gap-y-2 pt-2 text-md">
          <a href={`mailto:${broker.email}`} className="break-all">
            {broker.email}
          </a>
          <a href={`tel:${broker.phone}`} className="">
            {broker.phone}
          </a>
        </div>
      </div>
    </article>
  );
};

export default Broker;
