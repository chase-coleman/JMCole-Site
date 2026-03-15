import Button from '@mui/material/Button';

const BasicButton = ({ text }) => {
  return (
      <Button variant="contained" className="btn-default" sx={{fontSize: '.7rem', backgroundColor: 'var(--green)', color: 'var(--text-white)', 'padding': '5px 10px', borderRadius: '7.5px'}} >{text}</Button>
  );
}

export default BasicButton;