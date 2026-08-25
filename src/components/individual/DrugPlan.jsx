const DrugPlan = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="lede measure">
        Prescription Drug Plans (PDP) cover the cost of medications, and are
        generally used in one of two scenarios.
      </p>

      <div className="prose-block">
        <ul>
          <li>
            A person has <strong>only</strong> Original Medicare (Part A + B) and
            needs to have a PDP.
          </li>
          <li>
            A person who has a Medigap plan and needs to purchase a separate drug
            plan.
          </li>
        </ul>
      </div>

      <p className="body">
        Most PDPs are very similar, though there are some differences of note:
      </p>

      <div className="spec">
        <div className="spec-row">
          <span className="spec-key">Premium</span>
          <p className="spec-val">
            The cost of a PDP varies greatly depending on a variety of factors.
          </p>
        </div>
        <div className="spec-row">
          <span className="spec-key">Deductible</span>
          <p className="spec-val">
            The drug deductible can vary in price, and in which drug tier it
            applies to, depending on the plan.
          </p>
        </div>
        <div className="spec-row">
          <span className="spec-key">Formulary</span>
          <p className="spec-val">
            The drug formulary can vary with each plan. It is very important to
            examine the drug formularies to make certain that your chosen plan is
            the best plan for your prescription drug needs.
          </p>
        </div>
      </div>

      <div className="card card-lit">
        <p className="body">
          With the wide variety of available PDPs, it is not advisable to try to
          figure it all out yourself. Let us help you.
        </p>
      </div>
    </div>
  );
};

export default DrugPlan;
