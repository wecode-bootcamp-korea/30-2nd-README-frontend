import styled from 'styled-components';
import { useState, useEffect } from 'react';

function CheckInput({ id, checkedItemHandler, isAllChecked }) {
  const [bChecked, setChecked] = useState(false);
  const allCheckHandler = () => setChecked(isAllChecked);

  const checkHandler = e => {
    setChecked(!bChecked);
    checkedItemHandler(id, e.target.checked);
  };

  useEffect(() => allCheckHandler(), [isAllChecked]);

  return (
    <CheckInputBox
      type="checkbox"
      checked={bChecked}
      onChange={e => checkHandler(e)}
    />
  );
}

const CheckInputBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 1px solid #d2d5da;
`;

export default CheckInput;
