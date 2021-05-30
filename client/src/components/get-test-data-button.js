import { getTestData } from '../actions';
import { useDispatch } from 'react-redux';

function GetTestDataButton() {
  const dispatch = useDispatch();

  const handleGetTestDataClick = () => {
    dispatch(getTestData());
  }

  return (
    <>
      <h3>Get Test Data</h3>
      <button onClick ={() => handleGetTestDataClick()}>Get Test Data</button>
    </>
  );

};

export default GetTestDataButton;
 