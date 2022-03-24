import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Book = ({ book }) => {
  const { product_id, book_img, name, author, rating_avg, comment_count } =
    book;
  const navigate = useNavigate();

  const goToProductDetail = product_id => {
    navigate(`/products/books/${product_id}`);
  };

  return (
    <ItemWrap>
      <Item
        key={product_id}
        onClick={() => {
          goToProductDetail(product_id);
        }}
      >
        <BookImg src={book_img} alt={name} />
        <TxtWrap>
          <Name>{name}</Name>
          <Author>{author}</Author>
          <RatingWrap>
            <p>★{roundToTwo(rating_avg)}</p>
            <Comment>({comment_count})</Comment>
          </RatingWrap>
        </TxtWrap>
      </Item>
    </ItemWrap>
  );
};

const ItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 14px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const BookImg = styled.img`
  width: 180px;
  height: 260px;
  border-radius: 3%;
  border: 0.2px solid lightgray;
  /* background-color: blueviolet; */
`;
const TxtWrap = styled.div`
  margin: 10px;
  width: 160px;
`;

const Name = styled.div`
  font-size: 16px;
  padding-bottom: 10px;
`;

const Author = styled.div`
  font-size: 14px;
  color: #787878;
  padding-bottom: 5px;
`;

const Comment = styled.div`
  color: #787878;
  padding-left: 2px;
`;

const RatingWrap = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  color: #dc3232; ;
`;

export default Book;

const roundToTwo = num => {
  return +(Math.round(num + 'e+2') + 'e-2');
};
