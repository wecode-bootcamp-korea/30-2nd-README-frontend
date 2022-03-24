import styled from 'styled-components';

function ViewMore({ updateOffset }) {
  return (
    <ViewMoreBtnWrap>
      <ViewMoreBtn onClick={() => updateOffset(0)}>
        더보기{' '}
        <ViewMoreBtnImg src="https://cdn-icons-png.flaticon.com/128/566/566004.png" />
      </ViewMoreBtn>
    </ViewMoreBtnWrap>
  );
}

const ViewMoreBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const ViewMoreBtn = styled.button`
  width: 760px;
  height: 43px;
  padding: 10px;
  background-color: white;
  border: 3px solid #d1d5d9;
  color: #b3b3b3;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    background-color: #f2f4f5;
  }
`;

const ViewMoreBtnImg = styled.img`
  width: 10px;
  height: 10px;
  color: #b3b3b3;
`;

export default ViewMore;
