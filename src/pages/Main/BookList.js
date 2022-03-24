import React from 'react';
import Book from './Book';
import styled from 'styled-components';

const BookList = ({ bookList }) => {
  return (
    bookList !== undefined && (
      <BestSellerWrap>
        <BestSellerSection>
          {bookList.map((book, idx) => {
            return <Book key={idx} book={book} />;
          })}
        </BestSellerSection>
      </BestSellerWrap>
    )
  );
};

const BestSellerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1150px;
`;

const BestSellerSection = styled.div`
  width: 1150px;
  height: 350px;
  /* background-color: paleturquoise; */
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export default BookList;
