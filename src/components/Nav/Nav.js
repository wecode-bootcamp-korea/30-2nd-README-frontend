import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const navigate = useNavigate();
  const AccessToken = localStorage.getItem('token');
  const BtnName = !AccessToken ? '로그인' : '로그아웃';

  const goToCart = () => {
    navigate('/cart');
  };

  const renderButton = () => {
    if (!AccessToken) {
      navigate('/login');
    } else {
      localStorage.removeItem('token');
      alert('로그아웃 되었습니다');
      navigate('/main');
    }
  };

  return (
    <>
      <LogInWrap>
        <LogInBar>
          <LogIn onClick={renderButton}>{BtnName}</LogIn>
        </LogInBar>
      </LogInWrap>
      <NavWrap>
        <NavContent>
          <Link to="/">
            <LogoImg src="/images/logo.png" />
          </Link>
          <SearchWrap>
            <Search autoComplete="on" />
            <MagnifyingGlassImg src="/images/magnifier.png" />
          </SearchWrap>
          <Icon>
            <Img src="/images/bell.png" alt="bell" />
            <Img src="/images/cart.png" alt="cart" onClick={goToCart} />
            <Img src="/images/library.png" alt="library" />
            <Img src="/images/user.png" alt="myaccount" />
          </Icon>
        </NavContent>
      </NavWrap>
    </>
  );
};

const LogInWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px 100px 15px 0;
  border-bottom: 2px solid #f0f0f0;
  height: 37px;
`;
const LogInBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  width: 1140px;
`;

const LogIn = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #383737;

  &:hover {
    color: #d1d1d1;
    cursor: pointer;
  }
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  width: 1150px;
  background-color: white;
`;

const LogoImg = styled.img`
  object-fit: cover;
  height: 27px;
  padding-left: 10px;
`;

const SearchWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-left: 420px;
`;

const Search = styled.input`
  display: flex;
  width: 260px;
  height: 40px;
  align-items: center;
  padding-left: 45px;
  padding-right: 16px;
  border: 1px solid #00000001;
  border-radius: 8px;
  background-color: #f0f0f0;
  font-size: 15px;
  caret-color: #0064ff;
`;

const MagnifyingGlassImg = styled.img`
  position: absolute;
  height: 15px;
  object-fit: cover;
  left: 15px;
  top: 14px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
  padding-right: 30px;
`;

const Img = styled.img`
  height: 27px;

  &:hover {
    cursor: pointer;
  }
`;

export default Nav;
