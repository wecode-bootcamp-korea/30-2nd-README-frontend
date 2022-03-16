import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CATEGORY_BAR_DATA } from './CategoryBarData';
import CategoryBook from './CategoryBook';
import styled from 'styled-components';

const Category = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const str = decodeURI(location.search);
  const category = str.substring(10);

  const [bookList, setBookList] = useState([]);

  const updateUrl = genre => {
    navigate(`?category=${genre}`);
  };

  useEffect(() => {
    fetch(`http://10.58.7.123:8000/products${location.search}`)
      .then(res => res.json())
      .then(res => setBookList(res.result));
  }, [location.search]);

  return (
    <>
      <CategoryBarWrap>
        <CategoryBar>
          {CATEGORY_BAR_DATA.map(({ id, genre, image }) => (
            <CategoryWrap key={id} onClick={() => updateUrl(genre)}>
              <IconWrap>
                <Icons key={id} alt={genre} src={image} />
              </IconWrap>
              <Title key={id}>{genre}</Title>
            </CategoryWrap>
          ))}
        </CategoryBar>
      </CategoryBarWrap>
      <BookListWrap>
        <Header>
          <HeaderTxt>{category ? category : <p>최신 업로드 순</p>}</HeaderTxt>
        </Header>
        <ListWrap>
          <List>
            <CategoryBook bookList={bookList} />
          </List>
        </ListWrap>
      </BookListWrap>
    </>
  );
};

const CategoryBarWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const CategoryBar = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  /* background-color: blanchedalmond; */
  width: 1150px;
`;

const CategoryWrap = styled.div`
  padding: 0 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const IconWrap = styled.button`
  border-radius: 100%;
  border: 1px solid #f5f5f5;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 73px;
  height: 70px;
  padding: 0 10px;

  &:hover {
    background-color: #6f96e9;
  }
`;

const Icons = styled.img`
  width: 30px;
  height: 35px;
  padding-top: 3px;
`;

const Title = styled.div`
  padding-top: 8px;
  font-size: 14px;
  color: #141414;
`;

const BookListWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 1150px;
  margin-bottom: 20px;
`;

const HeaderTxt = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const List = styled.div`
  width: 1150px;
  height: 380px;
  display: flex;
  flex-direction: row;
`;

export default Category;
