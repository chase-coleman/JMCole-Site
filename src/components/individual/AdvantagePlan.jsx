const AdvantagePlan = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="lede measure">
        Medicare Advantage plans (MAPDs) are the alternative to Medigap for Part
        C coverage. Here's how they compare.
      </p>

      <div className="spec">
        <div className="spec-row">
          <span className="spec-key">Cost</span>
          <p className="spec-val">
            Advantage plans are generally much cheaper than Medigap plans. They
            can run from <strong>$0–$75+/month</strong> depending on the plan and
            carrier. A Medigap Plan G for a 65-year-old typically runs
            $120–$160+/month.
          </p>
        </div>
        <div className="spec-row">
          <span className="spec-key">Copays</span>
          <p className="spec-val">
            Advantage plans do carry some copays. For example, you may pay
            around $40 for a specialist visit.
          </p>
        </div>
        <div className="spec-row">
          <span className="spec-key">Drug coverage</span>
          <p className="spec-val">
            Most Advantage plans include Part D drug coverage built in, meaning
            you don't need to purchase a separate drug plan. Medigap plans do not
            so you would need to purchase a separate drug plan.
          </p>
        </div>
        <div className="spec-row">
          <span className="spec-key">Extra benefits</span>
          <div className="spec-val prose-block">
            <p>
              Many Advantage plans offer benefits that Medicare and Medigap don't
              cover, including:
            </p>
            <ul>
              <li>Preventative &amp; comprehensive dental</li>
              <li>Hearing aids and hearing services</li>
              <li>Eyeglasses and contacts</li>
              <li>Alternative care such as chiropractic, acupuncture, and naturopath</li>
              <li>Gym memberships</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <p className="body">
          Medicare Advantage plans vary in both what they cover and which
          doctors and hospitals are in their network, depending on the plan and
          carrier. This is exactly why having a broker in your corner matters. We
          know the plans and networks in your area, and we'll make sure you end
          up in a plan that works for your doctors, your needs, and your budget.
        </p>
      </div>
    </div>
  );
};

export default AdvantagePlan;
