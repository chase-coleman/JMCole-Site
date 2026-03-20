import Divider from '@mui/material/Divider';

const Footer = () => {
  return (
    <>
    <Divider className='w-3/4 self-center bg-[#BABABA]'/>
    <div className="flex flex-col mx-auto items-center w-full text-center p-8 text-xs sm:text-[12px]" style={{color: '#BABABA'}}>
    <h1>DISCLAIMERS:</h1>
      <p>
        Not connected with or endorsed by the United States
        government or the federal Medicare program.We may not offer every plan
        available in your area. Please contact Medicare.gov, 1-800-MEDICARE, or
        your local State Health Insurance Assistance Program (SHIP) to get
        information on all of your options.JMColegroup complies with applicable
        Federal civil rights laws and does not discriminate on the basis of
        race, color, national origin, age, disability, or sex. ATTENTION: If you
        speak a language other than English, language assistance services, free
        of charge, are available to you. Call 1-800-MEDICARE (TTY:
        1-877-486-2048).
      </p>
      </div>
    </>
  );
};
export default Footer;
