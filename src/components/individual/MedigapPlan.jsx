const MedigapPlan = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="lede measure">
        Medigap (also called Medicare Supplement) plans work alongside Original
        Medicare to cover costs it doesn't pay.
      </p>

      <div className="spec">
        <div className="spec-row">
          <span className="spec-key">Cost</span>
          <p className="spec-val">
            Medigap premiums average around <strong>$189/month at age 65</strong>{" "}
            (depending on the plan), rising to roughly $238/month by age 75. These
            costs vary depending on circumstances like state, and some companies
            offer a small discount to non-smokers and those living with other
            adults.
          </p>
        </div>
        <div className="spec-row">
          <span className="spec-key">Copays</span>
          <p className="spec-val">
            Most Medigap plans cover what Medicare doesn't, meaning you can see a
            doctor with little to no out-of-pocket cost. There are some copays and
            deductibles depending on the plan you choose.
          </p>
        </div>
        <div className="spec-row">
          <span className="spec-key">Drug coverage</span>
          <p className="spec-val">
            Medigap plans do not include prescription drug coverage. You'll need
            to purchase a separate Part D plan. Another reason to work with a
            broker who can bundle your coverage correctly.
          </p>
        </div>
        <div className="spec-row">
          <span className="spec-key">Networks</span>
          <p className="spec-val">
            You can see any doctor who accepts Original Medicare, anywhere in the
            country. Unlike Advantage plans, there are{" "}
            <strong>no networks</strong> to worry about.
          </p>
        </div>
      </div>

      <div className="card">
        <p className="body">
          One thing worth knowing: with Medigap/Supplement plans, the coverage is
          standardized. A Plan G is identical regardless of which insurance
          company offers it.
        </p>
      </div>
    </div>
  );
};

export default MedigapPlan;
