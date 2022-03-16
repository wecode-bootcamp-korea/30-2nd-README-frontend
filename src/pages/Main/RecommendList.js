import React from 'react';
import { useEffect, useState } from 'react';
import BookList from './BookList';
import styled from 'styled-components';

const RecommendList = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.7.123:8000/products/recommend`)
      .then(res => res.json())
      .then(res => setBookList(res.result));
  }, []);

  return (
    <BestSellerWrap>
      <TitleBar>
        <TitleTxt>리드미 추천 도서</TitleTxt>
      </TitleBar>
      <BookList bookList={bookList} />
    </BestSellerWrap>
  );
};

const BestSellerWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 80px;
`;

const TitleBar = styled.div`
  width: 1150px;
  /* background-color: peachpuff; */
  margin-bottom: 20px;
`;

const TitleTxt = styled.h2`
  font-size: 22px;
  font-weight: bold;
`;

export default RecommendList;
