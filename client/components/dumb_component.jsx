import { useParams } from 'react-router-dom';

export const DumbComponent = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.id}</div>;
};
