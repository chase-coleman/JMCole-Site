const MedigapPlan = () => {
  return (
    <>
      <span className="font-semibold">
        Medigap (also called Medicare Supplement) plans work alongside Original
        Medicare to cover costs it doesn't pay.
      </span>
      <p>
        <span className="font-semibold">Cost:</span> Medigap premiums average
        around $189/month at age 65 (depending on the plan), rising to roughly
        $238/month by age 75. These costs vary depending on circumstances like
        state, and some companies offer a small discount to non-smokers and
        those living with other adults.
      </p>
      <p>
        <span className="font-semibold">Copay's:</span> Most Medigap plans cover
        what Medicare doesn't, meaning you can see a doctor with little to no
        out-of-pocket cost. There are some co-pays and deductibles depending on
        the plan you choose.
      </p>
      <p>
        <span className="font-semibold">Drug coverage:</span> Medigap plans do
        not include prescription drug coverage.You'll need to purchase a
        separate Part D plan — another reason to work with a broker who can
        bundle your coverage correctly
      </p>
      <p>
        You can see any doctor who accepts Original Medicare, anywhere in the
        country. Unlike Advantage plans, there are no networks to worry about.
      </p>
      <p className="text-center mt-3">
        One thing worth knowing: with Medigap/Supplement plans, the coverage is
        standardized — a Plan G is identical regardless of which insurance
        company offers it.
      </p>
    </>
  );
};

export default MedigapPlan;
