import Divider from '@mui/material/Divider';

const Broker = ({ broker }) => {
  return (
    <div
      className="body-text w-full md:w-11/12 lg:w-3/4 flow-root rounded-lg p-5 shadow-md sm:p-6"
      style={{ backgroundColor: broker.background, color: 'var(--text-white)' }}
    >
      <img
        src="/chase-main.webp"
        alt={broker.name}
        className="mx-auto mb-4 block w-72 max-w-full rounded-lg object-cover lg:float-left lg:mr-6 lg:h-72"
      />
      <h3 className="text-center !text-3xl font-semibold">{broker.name}</h3>
      <p className="mt-1 mb-4 text-center opacity-90">{broker.position}</p>
      <p className="text-center">{broker.bio}</p>
      <Divider sx={{ my: 2.5, borderColor: 'rgb(242 242 242 / 45%)', clear: 'both' }} />
      <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-8">
        <span className="break-words">Email: {broker.email}</span>
        <span>Phone: {broker.phone}</span>
      </div>
    </div>
  );
};

export default Broker;
