import { StatusProps } from '../../types/componentTypes';

const Status = (props: StatusProps) => {
  const message =
    props.status === 'loading'
      ? 'loading...'
      : props.status === 'success'
        ? 'Data fetched succesfully'
        : 'Error fetching data';
  return (
    <div>
      <h2>Status:{message}</h2>
      <h2>Data fetched successfully!</h2>
      <h2>Error fetching data</h2>
    </div>
  );
};

export default Status;
