import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TitleBar = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };
  return (
    <>
      <Title>
        <TitleWrap>
          <TitleTxt onClick={goToMain}>도서</TitleTxt>
        </TitleWrap>
      </Title>
      <SubTitleWrap>
        <SubTitle>
          <SubTitleTxtWrap>
            <SubTitleTxt>추천</SubTitleTxt>
            <SubTitleTxt>리드미ONLY</SubTitleTxt>
            <SubTitleTxt>이벤트</SubTitleTxt>
            <SubTitleTxt>대여</SubTitleTxt>
          </SubTitleTxtWrap>
        </SubTitle>
      </SubTitleWrap>
    </>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleWrap = styled.div`
  width: 1150px;
  height: 57px;
  border-bottom: 2px solid #f0f0f0;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
  /* background-color: lightblue; */
`;

const TitleTxt = styled.h1`
  padding-top: 17px;
  font-size: 24px;
  color: #0164ff;
  font-weight: bold;
`;

const SubTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const SubTitle = styled.div`
  width: 1150px;
  margin-bottom: 10px;
  /* background-color: lightyellow; */
  display: flex;
  flex-direction: row;
`;

const SubTitleTxtWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  justify-content: space-between;
`;

const SubTitleTxt = styled.a`
  font-size: 17px;
  color: #141414;
  /* font-weight: bold; */
  display: flex;
  padding: 10px 0;
`;

export default TitleBar;
