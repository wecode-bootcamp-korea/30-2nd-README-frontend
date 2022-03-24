import styled from 'styled-components';
import CheckInput from './CheckInput';
import ViewMore from './ViewMore';

function SeriesData({
  listData,
  checkedItemHandler,
  allCheckedHandler,
  arr,
  count,
  isAllChecked,
  updateOffset,
}) {
  return (
    <ProductListWrap>
      {listData.length > 0 && (
        <>
          <ProductList>
            <ProductListLeft>
              <AllCheckBox
                type="checkbox"
                id="allCheckBox"
                onChange={e => allCheckedHandler(e.target.checked)}
              />
              <AllCheckLabel for="allCheckBox">전체선택</AllCheckLabel>
              <NewSort>신간부터</NewSort>
            </ProductListLeft>
            <ProductListRight>
              <BookCount>총 {`${count}`}권</BookCount>
              <PriceCount>
                총 {`${(listData[0].price * arr.length).toLocaleString()}`}원
                {/* 총{' '}
                {`${(
                  listData[0].itemIndividualPrice * arr.length
                ).toLocaleString()}`}
                원 */}
              </PriceCount>
              <ChoiceIntestineBtn>선택 소장</ChoiceIntestineBtn>
            </ProductListRight>
          </ProductList>
          <ProductListDataWrap>
            {/* {listData.map(content => {
              return (
                <ListDataWrap key={content.id}>
                  <CheckInput
                    checkedItemHandler={checkedItemHandler}
                    isAllChecked={isAllChecked}
                    id={content.id}
                  />
                  <DataImg alt="책" src={content.image} />
                  <DataWrap>
                    <DataTitle>{content.itemName}</DataTitle>
                    <DataDateNumber>
                      <DataDate>{content.itemDate}</DataDate>
                    </DataDateNumber>
                    <DataPrice>
                      {`${Number(
                        content.itemIndividualPrice
                      ).toLocaleString()}`}
                      원
                    </DataPrice>
                  </DataWrap>
                </ListDataWrap>
              );
            })} */}
            {listData.map((content, index) => {
              return (
                <ListDataWrap key={index}>
                  <CheckInput
                    checkedItemHandler={checkedItemHandler}
                    isAllChecked={isAllChecked}
                    id={content.series_id}
                  />
                  <DataImg alt="책" src={content.series_image} />
                  <DataWrap>
                    <DataTitle>{content.series_name}</DataTitle>
                    <DataDateNumber>
                      <DataDate>{content.published_at}</DataDate>
                    </DataDateNumber>
                    <DataPrice>
                      {`${Number(content.price).toLocaleString()}`}원
                    </DataPrice>
                  </DataWrap>
                </ListDataWrap>
              );
            })}
          </ProductListDataWrap>
        </>
      )}
      <ViewMore updateOffset={updateOffset} />
    </ProductListWrap>
  );
}

const ProductListWrap = styled.div``;

const ProductList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 0px;
  margin: 0px 30px;
  border-top: 3px solid #666666;
  border-bottom: 1px dotted #666666;
`;

const ProductListLeft = styled.div`
  display: flex;
  align-items: center;
`;

const AllCheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 1px solid #d2d5da;
`;

const AllCheckLabel = styled.label`
  margin-right: 10px;
  color: #40474d;
  font-size: 13px;

  &:hover {
    cursor: pointer;
  }
`;

const NewSort = styled.button`
  width: 80px;
  height: 40px;
  padding: 10px;
  border: 1px solid #d2d5da;
  border-radius: 5px;
  background-color: white;
  color: #818a91;

  &:hover {
    background-color: #f2f4f5;
  }
`;

const ProductListRight = styled.div`
  display: flex;
  align-items: center;
`;

const BookCount = styled.span`
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
`;

const PriceCount = styled.span`
  margin-right: 10px;
  color: #1f8ce6;
  font-size: 15px;
  font-weight: bold;
`;

const ChoiceIntestineBtn = styled.button`
  width: 80px;
  height: 40px;
  padding: 10px;
  background-color: #1f8ce6;
  border: 1px solid #d2d5da;
  border-radius: 5px;
  color: white;

  &:hover {
    background-color: #0677d9;
  }
`;

const ProductListDataWrap = styled.div``;

const ListDataWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  margin: 0 30px;
  border-bottom: 2px solid #f2f4f5;

  &:hover {
    background-color: #f2f4f5;
  }
`;

const DataImg = styled.img`
  width: 45px;
  height: 70px;
  margin-right: 15px;
  border-radius: 5px;
`;

const DataWrap = styled.div``;

const DataTitle = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 13px;
`;

const DataDateNumber = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const DataDate = styled.span`
  display: inline-block;
  margin-right: 5px;
  padding-right: 5px;
  border-right: 1px solid #666;
  color: #666;
  font-size: 12px;
`;

const DataPrice = styled.div`
  color: #1f8ce6;
  font-size: 15px;
`;

export default SeriesData;
