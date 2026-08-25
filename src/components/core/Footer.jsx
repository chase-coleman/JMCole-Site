import Divider from '@mui/material/Divider';

const Footer = () => {
  return (
    <footer className="mt-auto w-full pb-8">
      {/* MUI Divider draws a border, so colour it via borderColor rather than a background */}
      <Divider
        className="w-3/4 self-center mx-auto"
        sx={{ borderColor: '#BABABA' }}
      />
      <div
        className="content flex flex-col items-center gap-3 pt-8 text-center"
        style={{ color: '#BABABA' }}
      >
        <h2 className="text-xs font-semibold tracking-[.2em]">DISCLAIMERS</h2>
        <p className="max-w-[75ch] text-xs leading-relaxed">
          Not connected with or endorsed by the United States government or the
          federal Medicare program. We may not offer every plan available in your
          area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State
          Health Insurance Assistance Program (SHIP) to get information on all of
          your options. JMColegroup complies with applicable Federal civil rights
          laws and does not discriminate on the basis of race, color, national
          origin, age, disability, or sex. ATTENTION: If you speak a language
          other than English, language assistance services, free of charge, are
          available to you. Call 1-800-MEDICARE (TTY: 1-877-486-2048).
        </p>
      </div>
    </footer>
  );
};
export default Footer;
