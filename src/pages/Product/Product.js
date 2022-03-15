import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import SeriesData from './SeriesData';
import UserComment from './UserComment';

function Product() {
  const [productData, setProductData] = useState([]);
  const [listData, setListData] = useState([]);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);
  // 초기값 지정. 관련 메소드 사용해야 할 경우 있음.
  // 빈 배열이어도 다음 번 값이 다른 타입이 들어올 수 있음.
  const [comment, setComment] = useState('');
  const [addCommentList, setAddCommentList] = useState([]);

  const arr = Array.from(checkedItems);
  let count = 0;

  const access_token = localStorage.getItem('token');
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const LIMIT = 20;
  // const userName = 'test01';
  // const commentDate = '2020.02.01';

  useEffect(() => {
    fetch(`http://10.58.7.123:8000/products/details/${params.id}`)
      .then(res => res.json())
      .then(data => setProductData(data.result));
  }, []);

  useEffect(() => {
    fetch(
      `http://10.58.7.123:8000/products/books/${params.id}${
        location.search || `?limit=10&offset=0`
      }`
    )
      .then(res => res.json())
      .then(data => setListData(data.result));
  }, [location.search]);

  const updateOffset = buttonIndex => {
    let offset = buttonIndex * LIMIT;
    const queryString = `?limit=${LIMIT}&offset=${offset}`;
    navigate(`${queryString}`);
  };

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems => new Set(checkedItems));
      // state를 setState에 넣을 때 이전 값만 들어감.
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems => new Set(checkedItems));
    }
  };

  const allCheckedHandler = isChecked => {
    if (isChecked) {
      setCheckedItems(new Set(listData.map(({ series_id }) => series_id)));
      // setCheckedItems(new Set(listData.map(({ id }) => id)));
      setIsAllChecked(true);
    } else {
      checkedItems.clear();
      setCheckedItems(checkedItems);
      setIsAllChecked(false);
    }
  };

  for (let i = 0; i < arr.length; i++) {
    count++;
  }

  const onChange = event => {
    setComment(event.target.value);
  };

  const submitComment = event => {
    event.preventDefault();
    if (!access_token) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    fetch(`http://10.58.7.123:8000/reviews/${params.id}`, {
      method: 'POST',
      headers: {
        Authorization: access_token,
      },
      body: JSON.stringify({
        content: comment,
        rating: 5,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          addComment();
        } else {
          alert('다시 시도해주세요!');
        }
      });
  };

  const addComment = () => {
    if (!access_token) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    fetch(`http://10.58.7.123:8000/reviews/${params.id}`, {
      method: 'GET',
      headers: {
        Authorization: access_token,
      },
    })
      .then(response => response.json())
      .then(result => {
        setAddCommentList([
          ...addCommentList,
          {
            nickname: result.results.top_review.nickname,
            content: result.results.top_review.content,
            created_at: result.results.top_review.created_at,
          },
        ]);
        setComment('');
      });
  };

  const goToBasket = () => {
    if (!access_token) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    fetch(`http://10.58.7.123:8000/carts`, {
      method: 'POST',
      headers: {
        Authorization: access_token,
      },
      body: JSON.stringify({
        product_id: `${params.id}`,
        series_ids: arr,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'CREATE_CART') {
          window.confirm(
            '상품이 장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?'
          ) && navigate('/cart');
        } else {
          alert('다시 시도해주세요!');
        }
      });
  };

  return (
    <DivWrapper>
      <ProductDetail>
        <Article>
          <ImgWrap>
            <ProductImg>
              <Img alt="book" src={productData.book_img} />
              {/* <Img
                alt="book"
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              /> */}
            </ProductImg>
            <PreviewBox>
              <Preview>
                <PreviewContent>
                  <BookImg src="https://cdn-icons-png.flaticon.com/128/973/973750.png" />
                  미리보기
                </PreviewContent>
              </Preview>
            </PreviewBox>
          </ImgWrap>
          <ProductInfoWrap>
            <ProductInfo>
              <Title>{productData.book_name}</Title>
              {/* <Title>내가 키운 S급들 1권</Title> */}
              <Author>
                <AuthorLink href="#">{productData.author}</AuthorLink> 저
                {/* <AuthorLink href="#">산토리노 마르코</AuthorLink> 저 */}
              </Author>
              <Publisher>
                <PublisherLink href="#">{productData.publisher}</PublisherLink>{' '}
                출판
              </Publisher>
              {/* <PublisherLink href="#">애자일</PublisherLink> 출판
              </Publisher> */}
            </ProductInfo>
            <PriceWrap>
              <Purchase>구매</Purchase>
              <PriceTagWrap>
                <PriceTag>전권 가격</PriceTag>
                <Price>
                  {Number(productData.total_price).toLocaleString()}원
                  {/* 1000원 */}
                </Price>
              </PriceTagWrap>
            </PriceWrap>
            <BtnWrap>
              <WishBtn>
                <WishImg src="https://img.icons8.com/ios-filled/2x/like.png" />
              </WishBtn>
              <GiftBtn>
                <GiftImg src="https://cdn-icons-png.flaticon.com/128/710/710014.png" />
              </GiftBtn>
              <CartBtn onClick={() => goToBasket()}>장바구니</CartBtn>
            </BtnWrap>
          </ProductInfoWrap>
        </Article>
        <SeriesData
          listData={listData}
          checkedItemHandler={checkedItemHandler}
          allCheckedHandler={allCheckedHandler}
          arr={arr}
          count={count}
          isAllChecked={isAllChecked}
          updateOffset={updateOffset}
        />
        <Review>리뷰</Review>
        <CommentForm onSubmit={submitComment}>
          <Comment
            type="text"
            placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
            onChange={onChange}
            value={comment}
          />
          <SubmitWrap>
            <Submit>리뷰 남기기</Submit>
          </SubmitWrap>
        </CommentForm>
        <UserCountWrap>
          <UserCount>전체</UserCount>
        </UserCountWrap>
        {addCommentList.map((content, index) => {
          return (
            <div key={index}>
              <UserComment
                content={content.content}
                userName={content.nickname}
                commentDate={content.created_at}
              />
            </div>
          );
        })}
      </ProductDetail>
    </DivWrapper>
  );
}

const DivWrapper = styled.div`
  width: 100%;
`;

const ProductDetail = styled.div`
  width: 820px;
  margin: 0 auto 60px auto;
  border-right: 2px solid #e6e8eb;
`;

const Article = styled.article`
  display: flex;
  padding: 40px 30px;
`;

const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductImg = styled.div``;

const Img = styled.img`
  width: 210px;
  height: 310px;
`;

const PreviewBox = styled.div`
  display: flex;
  justify-content: center;
  width: 230px;
`;

const Preview = styled.button`
  width: 160px;
  height: 80px;
  background-color: white;
  font-weight: 700px;
`;

const PreviewContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  border: 2px solid #1f8ce6;
  border-radius: 5px;
  color: #1f8ce6;
  font-weight: bold;
  font-size: 17px;
  text-decoration: none;

  &:hover {
    background-color: #ebf7ff;
  }
`;

const BookImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const ProductInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const ProductInfo = styled.div`
  width: 510px;
  height: 200px;
  border-bottom: 2.5px solid #e6e8eb;
`;

const Title = styled.h2`
  padding-top: 30px;
  padding-bottom: 35px;
  font-size: 30px;
  font-weight: 700;
`;

const Author = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  color: grey;
`;

const AuthorLink = styled.a`
  color: #666;
  font-weight: bold;
`;

const Publisher = styled.div`
  padding-bottom: 20px;
  font-size: 16px;
  color: grey;
`;

const PublisherLink = styled.a`
  color: #666;
  font-weight: bold;
`;

const PriceWrap = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Purchase = styled.div`
  width: 170px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  border-top: 2px solid #e6e8eb;
  border-right: 2px solid #e6e8eb;
  border-bottom: 2px solid #e6e8eb;
  color: #40474d;
  font-weight: bold;
  font-size: 16px;
`;

const PriceTagWrap = styled.div`
  display: flex;
  height: 90px;
  border-top: 2px solid #e6e8eb;
  border-bottom: 2px solid #e6e8eb;
`;

const PriceTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 90px;
  color: #818a91;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 90px;
  color: #1f8ce6;
  font-weight: bold;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: right;
  width: 510px;
  margin-top: 20px;
`;

const WishBtn = styled.button`
  width: 60px;
  height: 60px;
  margin-right: 5px;
  padding: 10px;
  background-color: white;
  border: 1px solid #d2d5da;
  border-radius: 5px;
  color: #818a91;

  &:hover {
    background-color: #f2f4f5;
  }
`;

const WishImg = styled.img`
  margin-right: 2px;
  width: 20px;
  height: 20px;
`;

const GiftBtn = styled.button`
  width: 60px;
  height: 60px;
  margin-right: 5px;
  padding: 10px;
  background-color: white;
  border: 1px solid #d2d5da;
  border-radius: 5px;
  color: #818a91;

  &:hover {
    background-color: #f2f4f5;
  }
`;

const GiftImg = styled.img`
  margin-right: 2px;
  width: 20px;
  height: 20px;
`;

const CartBtn = styled.button`
  width: 130px;
  height: 60px;
  border-radius: 5px;
  background-color: #1f8ce6;
  color: white;
  font-size: 15px;

  &:hover {
    background-color: #0677d9;
  }
`;

const Review = styled.div`
  margin: 30px 30px;
  padding-bottom: 10px;
  border-bottom: 3px solid #7d8e9e;
  color: #59667a;
  font-size: 20px;
  font-weight: bold;
`;

const CommentForm = styled.form`
  margin: 10px 30px;
`;

const Comment = styled.textarea`
  width: 760px;
  height: 113px;
  padding: 12px 15px;
  border: 3px solid #d1d5d9;
  border-radius: 5px;
  font-weight: bold;
  font-size: 13px;
  vertical-align: top;
  resize: none;
`;

const SubmitWrap = styled.div`
  margin: 20px 0px;
  width: 760px;
  text-align: right;
`;

const Submit = styled.button`
  padding: 8px 18px;
  background-color: #8fc6f3;
  border: 1px solid #8fc6f3;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;

  &:hover {
    background-color: #0077d9;
    border: 1px solid #0077d9;
  }
`;

const UserCountWrap = styled.div`
  padding: 10px 0px 10px 0px;
  margin: 20px 30px;
  border-bottom: 3px solid #7d8e9e;
`;

const UserCount = styled.span`
  color: #636c73;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    color: #40474d;
  }
`;

export default Product;
