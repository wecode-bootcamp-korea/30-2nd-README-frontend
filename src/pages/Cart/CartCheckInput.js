import styled from 'styled-components';
import { useState, useEffect } from 'react';

function CartCheckInput({ id, checkedItemHandler, isAllChecked }) {
  const [bChecked, setChecked] = useState(false);
  const allCheckHandler = () => setChecked(isAllChecked);

  const checkHandler = e => {
    setChecked(!bChecked);
    checkedItemHandler(id, e.target.checked);
  };

  useEffect(() => allCheckHandler(), [isAllChecked]);

  return (
    <CartCheckInputBox
      type="checkbox"
      checked={bChecked}
      onChange={e => checkHandler(e)}
    />
  );
}

const CartCheckInputBox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  border: 1px solid #d2d5da;
`;

export default CartCheckInput;
