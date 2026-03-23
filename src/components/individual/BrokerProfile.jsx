import Divider from '@mui/material/Divider';

const Broker = ({ broker }) => {
  return (
    <>
      <div
        className="body-text w-full md:w-3/4 p-4 gap-3 !text-white rounded"
        style={{ backgroundColor: broker.background }}

      >
        <img
          src="/chase-main.webp"
          alt="chase"
          className="float-none block mx-auto mb-4 w-76 lg:h-72 lg:float-left lg:mr-4"
        />
        <h4 className="text-center !text-3xl">{broker.name}</h4>
        <h6 className="text-center !text-md">{broker.position}</h6>
        <br />
        <div className="md:p-2">
          <p className="text-center">{broker.bio}</p>
        </div>
          <Divider className='bg-[#F2F2F2]'/>
        <div className="flex w-full justify-center gap-6 mt-2">
          <span>Email: {broker.email}</span> <br />
          <span>Phone: {broker.phone}</span>
        </div>
      </div>
    </>
  );
};

export default Broker;
