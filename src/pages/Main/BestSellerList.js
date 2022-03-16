import React from 'react';
import { useEffect, useState } from 'react';
import BookList from './BookList';
import styled from 'styled-components';

const BestSellerList = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.7.123:8000/products/bestseller`)
      .then(res => res.json())
      .then(res => setBookList(res.result));
  }, []);

  return (
    <BestSellerWrap>
      <TitleBar>
        <TitleTxt>베스트셀러</TitleTxt>
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

export default BestSellerList;
