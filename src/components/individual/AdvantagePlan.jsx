const AdvantagePlan = () => {
  return (
    <>
      <span className="font-semibold">
        Medicare Advantage plans (MAPDs) are the alternative to Medigap for Part
        C coverage. Here's how they compare:
      </span>
      <p>
        <span className="font-semibold">Cost:</span> Advantage plans are
        generally much cheaper than Medigap plans. They can from from
        $0-$75+/month depending on the plan & carrier. A Medigap Plan G for a
        65-year-old typically runs $120-$160+/month.
      </p>
      <p>
        <span className="font-semibold">Copay's:</span> Advantage plans do carry
        some copays — for example, you may pay around $40 for a specialist
        visit.
      </p>
      <p>
        <span className="font-semibold">Drug coverage:</span> Most Advantage
        plans include Part D drug coverage built in, meaning you don't need to
        purchase a separate drug plan. Medigap plans do not — you would need to
        purchase a separate drug plan.
      </p>
      <div>
        <p>
          <span className="font-semibold">Extra Benefits:</span> Many Advantage
          plans offer benefits that Medicare and Medigap don't cover, including:
        </p>
        <ul className="list-disc flex flex-col gap-1 mt-2">
          <li>Preventitive & comprehensive dental</li>
          <li>Hearing aids and hearing services</li>
          <li>Eyeglasses and contacts</li>
          <li>
            Alternative care such as chiropractic, acupunture, and naturopath
          </li>
          <li>Gym memberships</li>
        </ul>
      </div>
      <p className="text-center mt-3">
        Medicare Advantage plans can vary in both what they cover and which
        doctors/hospitals are in their network depending on the plan/carrier.
        This is exactly why having a broker in your corner matters. We know the
        plans and networks in your area, and we'll make sure you end up in a
        plan that works for your doctors, your needs, and your budget.
      </p>
    </>
  );
};

export default AdvantagePlan;
