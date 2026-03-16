import { BasicButton, OutlinedButton } from "../individual/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen ml-9 mr-9 mt-5  gap-5">
        <div>
          <h1 className="header">Confused about Medicare?</h1>
        </div>
        <div>
          <h2 className="subheader">Let us help you - for free.</h2>
        </div>
        <div>
          <span className="body-text">Serving Oregon seniors since 2016.</span>
        </div>
        <div className="w-3/4 mt-2">
          <img src="/multnomah.webp" alt="multnomah" />
        </div>
        <div className="flex gap-10">
          <BasicButton text="Request Guidance now" icon={<ArrowRightAltIcon/>}/>
          <OutlinedButton text='Meet The Team' icon={<ArrowRightAltIcon/>} />
        </div>
      </div>
    </>
  );
};

export default Home;
