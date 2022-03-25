import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartCheckInput from './CartCheckInput';
import { API } from '../../config';

function Cart() {
  const [optionalList, setOptionalList] = useState([]);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);
  const arr = Array.from(checkedItems);
  const navigate = useNavigate();
  const access_token = localStorage.getItem('token');
  let count = 0;

  useEffect(() => {
    fetch(`${API.CART}`, {
      method: 'GET',
      headers: {
        Authorization: access_token,
      },
    })
      .then(res => res.json())
      .then(data => setOptionalList(data.result));
  }, []);

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
      setCheckedItems(new Set(optionalList.map(({ series_id }) => series_id)));
      // setCheckedItems(new Set(optionalList.map(({ id }) => id)));
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

  const goToPurchase = () => {
    if (!access_token) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    fetch(`${API.ORDER}`, {
      method: 'POST',
      headers: {
        Authorization: access_token,
      },
      body: JSON.stringify({
        product_id: optionalList[0].product_id,
        series_ids: arr,
        // return 문 밖은 그냥 자바스크립트 문법. 변수만 쓸때는 ${}쓸 필요가 없음. 변수와 다른 형식을 붙일 때 ``과 ${} 활용
        // return 문 안은 JSX문법. 문자 이외에는 {}안에 넣어주면 됨 .굳이 변수에 {}붙여주거나 {}안에 내용과 문자 붙여줄 때 ``사용할 필요 없음.
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'CREATE_ORDER') {
          window.confirm('결제가 완료되었습니다.');
        } else {
          alert('다시 시도해주세요!');
        }
      });
  };

  return (
    <CartWrap>
      {optionalList.length > 0 && (
        <>
          <CartTitle>카트</CartTitle>
          <CartInfo>
            <SelectBox>
              <AllSelctBoxWrap>
                <AllSelectBoxContent>
                  <AllSelectBox
                    type="checkbox"
                    id="allSelect"
                    onChange={e => allCheckedHandler(e.target.checked)}
                  />
                  <AllSelectBoxTitle for="allSelect">
                    전체선택
                  </AllSelectBoxTitle>
                </AllSelectBoxContent>
                <SelectBtn>
                  <WishListBtn>선택 위시리스트로 이동</WishListBtn>
                  <CancelBtn>선택 삭제</CancelBtn>
                </SelectBtn>
              </AllSelctBoxWrap>
              {optionalList.map(content => {
                return (
                  // <OptionalProduct key={content.id}>
                  <OptionalProduct key={content.series_id}>
                    <OptionalProuctWrap>
                      <OptionalSelctBoxWrap>
                        <CartCheckInput
                          checkedItemHandler={checkedItemHandler}
                          isAllChecked={isAllChecked}
                          // id={content.id}
                          id={content.series_id}
                        />
                        <OptionalProductImg
                          alt="선택상품"
                          src={content.image}
                        />
                      </OptionalSelctBoxWrap>
                      <OptionalProductContent>
                        <OptionalProductTitle>
                          {/* {content.itemName} */}
                          {content.series_name}
                        </OptionalProductTitle>
                        <OptionalProductAuthor>
                          {/* {content.itemAuthor} */}
                          {content.author}
                        </OptionalProductAuthor>
                        <OptionalProductBtn>
                          <ListBtn>위시리스트로 이동</ListBtn>
                          <OptionalProductCancelBtn>
                            삭제
                          </OptionalProductCancelBtn>
                        </OptionalProductBtn>
                      </OptionalProductContent>
                    </OptionalProuctWrap>
                    <OptionalProductPrice>
                      {/* {Number(10000).toLocaleString()}원 */}
                      {Number(content.series_price).toLocaleString()}원
                    </OptionalProductPrice>
                  </OptionalProduct>
                );
              })}
            </SelectBox>
            <PaymentBox>
              <BooksNumber>{count} 권을 선택하셨습니다.</BooksNumber>
              <TotalPriceWrap>
                <TotalPrice>총 상품 금액</TotalPrice>
                <TotalPriceContent>
                  {/* {(count * optionalList[0].itemPrice).toLocaleString()}원 */}
                  {(count * optionalList[0].series_price).toLocaleString()}원
                  {/* return문 안 JSX문법에서 문자 제외한 것은 전부 중괄호 */}
                </TotalPriceContent>
              </TotalPriceWrap>
              <DiscountPriceWrap>
                <DiscountPrice>할인 금액</DiscountPrice>
                <DiscountPriceContent>0원</DiscountPriceContent>
              </DiscountPriceWrap>
              <PurchasePriceWrap>
                <PurcahsePrice>합계</PurcahsePrice>
                <PurchasePriceContent>
                  {/* {(count * optionalList[0].itemPrice).toLocaleString()}원 */}
                  {(count * optionalList[0].series_price).toLocaleString()}원
                </PurchasePriceContent>
              </PurchasePriceWrap>
              <PurchaseBtn onClick={goToPurchase}>선택 구매하기</PurchaseBtn>
            </PaymentBox>
          </CartInfo>
        </>
      )}
    </CartWrap>
  );
}

const CartWrap = styled.div`
  width: 1000px;
  margin: 50px auto 100px auto;
`;

const CartTitle = styled.h2`
  margin-bottom: 18px;
  font-size: 24px;
  font-weight: bold;
`;

const CartInfo = styled.div`
  display: flex;
`;

const SelectBox = styled.div`
  width: 620px;
  padding: 20px;
  margin-right: 40px;
  border: 2px solid #d1d5d9;
`;

const AllSelctBoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #dfdfdf;
`;

const AllSelectBoxContent = styled.div`
  display: flex;
  align-items: center;
`;

const AllSelectBox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

const AllSelectBoxTitle = styled.label`
  color: #40474d;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const SelectBtn = styled.div``;

const WishListBtn = styled.button`
  margin-right: 5px;
  padding: 7px;
  background-color: white;
  border: 2px solid #d1d5d9;
  border-radius: 4px;
  color: #808991;
  font-size: 13px;

  &:hover {
    background-color: #f2f4f5;
  }
`;

const CancelBtn = styled.button`
  padding: 7px;
  background-color: white;
  border: 2px solid #d1d5d9;
  border-radius: 4px;
  color: #808991;
  font-size: 13px;

  &:hover {
    background-color: #f2f4f5;
  }
`;

const OptionalProduct = styled.div`
  display: flex;
  width: 575px;
  height: 130px;
  padding: 20px 0px;
  border-bottom: 1px solid #dfdfdf;
`;

const OptionalProuctWrap = styled.div`
  display: flex;
`;

const OptionalSelctBoxWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const OptionalProductImg = styled.img`
  width: 60px;
  height: 90px;
`;

const OptionalProductContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OptionalProductTitle = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

const OptionalProductAuthor = styled.div`
  color: #666;
  font-size: 13px;
  font-weight: 400;
`;

const OptionalProductBtn = styled.div`
  display: flex;
`;

const ListBtn = styled.button`
  margin-right: 5px;
  padding: 8px 18px;
  background-color: white;
  border: 1px solid #d1d5d9;
  border-radius: 4px;
  color: #808991;
  font-size: 12px;

  &:hover {
    background-color: #f2f4f5;
  }
`;

const OptionalProductCancelBtn = styled.button`
  padding: 8px 18px;
  background-color: white;
  border: 1px solid #d1d5d9;
  border-radius: 4px;
  color: #808991;
  font-size: 12px;

  &:hover {
    background-color: #f2f4f5;
  }
`;

const OptionalProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 270px;
  height: 94px;
  color: #3f9ce9;
  font-weight: bold;
`;

const PaymentBox = styled.div`
  position: fixed;
  top: 210px;
  left: 50%;
  transform: translateX(160px);
  width: 320px;
  height: 188px;
  border: 1px solid #87b4e9;
  font-size: 12px;
  font-weight: bold;
`;

const BooksNumber = styled.div`
  padding: 20px 20px 0 20px;
  color: #5382b9;
  font-size: 15px;
  font-weight: bold;
`;

const TotalPriceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
  font-size: 13px;
  font-weight: bold;
`;

const TotalPrice = styled.div`
  color: #738096;
  font-size: 15px;
`;

const TotalPriceContent = styled.div`
  color: #40474d;
  font-size: 15px;
`;

const DiscountPriceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
  font-size: 13px;
  font-weight: bold;
`;

const DiscountPrice = styled.div`
  color: #738096;
  font-size: 15px;
`;

const DiscountPriceContent = styled.div`
  color: #40474d;
  font-size: 15px;
`;

const PurchasePriceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
  background-color: #ebf6ff;
  font-size: 13px;
  font-weight: bold;
`;

const PurcahsePrice = styled.div`
  color: #738096;
  font-size: 15px;
`;

const PurchasePriceContent = styled.div`
  color: #1f8ce6;
  font-size: 20px;
`;

const PurchaseBtn = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  color: white;
  border-radius: 4px;
  background-color: #2e94e8;
  box-shadow: 0 2px 4px 0 rgb(31 140 230 / 30%);
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #0077d9;
  }
`;

export default Cart;
