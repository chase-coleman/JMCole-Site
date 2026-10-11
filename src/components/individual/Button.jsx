import { useNavigate } from "react-router";

/*
 * Both buttons keep their original behaviour: the filled one routes to the
 * contact form, the ghost one to the team page. They just use the
 * shared .btn classes now instead of MUI.
 * Pass `href` to BasicButton to link to another site instead; it opens in a
 * new tab.
 */

export const BasicButton = ({ text, icon, styling = "", to = "/contact", href }) => {
  const navigate = useNavigate();
  if (href) {
    return (
      <a className={`btn btn-primary ${styling}`} href={href} target="_blank" rel="noopener noreferrer">
        {text}
        {icon}
      </a>
    );
  }
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
