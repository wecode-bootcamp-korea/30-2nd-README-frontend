import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CategoryBook = ({ bookList }) => {
  const navigate = useNavigate();

  const goToProductDetail = product_id => {
    navigate(`/products/books/${product_id}`);
  };

  return (
    <BookList>
      <BookContent>
        {bookList.map((book, idx) => {
          return (
            <ContentWrap key={idx}>
              <BookImage
                onClick={() => {
                  goToProductDetail(book.product_id);
                }}
                src={book.book_img}
                alt={book.name}
              />
              <Index>{idx + 1}</Index>
              <TxtWrap>
                <Title onClick={goToProductDetail}>{book.name}</Title>
                <Author>{book.author}</Author>
                <RatingWrap>
                  <Rating>★{roundToTwo(book.rating_avg)}</Rating>
                  <Comment>({book.comment_count})</Comment>
                </RatingWrap>
              </TxtWrap>
            </ContentWrap>
          );
        })}
      </BookContent>
    </BookList>
  );
};

const BookList = styled.div`
  display: flex;
  flex-direction: row;
`;

const BookContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 8px;
  flex-wrap: wrap;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  align-items: center;
  margin-right: 84px;
`;

const BookImage = styled.img`
  width: 85px;
  height: 120px;
  border-radius: 3%;
  &:hover {
    cursor: pointer;
  }
`;

const Index = styled.div`
  width: 110px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
`;

const TxtWrap = styled.div`
  width: 120px;
  line-height: 23px;
  font-size: 15px;
`;

const Title = styled.h3`
  font-size: 16px;
  width: 160px;
  &:hover {
    cursor: pointer;
  }
`;

const Author = styled.h3`
  color: #919191;
  font-size: 14px;
  width: 160px;
  margin: 2px 0;
`;

const RatingWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const Rating = styled.div`
  color: #dc3232;
`;

const Comment = styled.div`
  color: #787878;
`;

const roundToTwo = num => {
  return +(Math.round(num + 'e+2') + 'e-2');
};

export default CategoryBook;
