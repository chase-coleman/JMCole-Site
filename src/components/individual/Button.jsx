import { useNavigate } from "react-router";

/*
 * Both buttons keep their original behaviour: the filled one routes to the
 * contact form, the ghost one to the team page. They just use the
 * shared .btn classes now instead of MUI.
 */

export const BasicButton = ({ text, icon, styling = "", to = "/contact" }) => {
  const navigate = useNavigate();
  return (
    <button className={`btn btn-primary ${styling}`} onClick={() => navigate(to)}>
      {text}
      {icon}
    </button>
  );
};

export const OutlinedButton = ({ text, icon, styling = "", to = "/about" }) => {
  const navigate = useNavigate();
  return (
    <button className={`btn btn-ghost ${styling}`} onClick={() => navigate(to)}>
      {text}
      {icon}
    </button>
  );
};
