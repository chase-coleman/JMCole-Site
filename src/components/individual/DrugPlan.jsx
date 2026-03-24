const DrugPlan = () => {
  return (
    <>
      <span className="font-semibold">
        Prescription Drug Plans (PDP) cover the cost of medications & are
        generally used in one of two scenarios:
      </span>
      <ul className="flex flex-col gap-1 list-disc">
        <li>
          a person has ONLY original Medicare (Part A+B) and needs to have a PDP
        </li>
        <li>
          a person who has a Medigap plan and needs to purchase a separate drug
          plan
        </li>
      </ul>
      <span className="font-semibold">
        Most PDP's are very similar though there are some differences of note:
      </span>
      <ul className="flex flex-col gap-1 list-disc">
        <li>
          The cost of a PDP varies greatly depending on a variety of factors
        </li>
        <li>
          The drug deductible can vary in price and in what drug tier it applies
          to depending on the plan
        </li>
        <li>
          The drug formulary can vary with each plan.  It is very important is
          to examine the drug formularies to make certain that your chosen plan
          is the best plan for your prescription drug needs
        </li>
      </ul>
      <p className="text-center mt-3">
        With the wide variety of available PDP's, it is not advisable to try to figure it all out yourself.  Let us help you!
      </p>
    </>
  );
};

export default DrugPlan;
