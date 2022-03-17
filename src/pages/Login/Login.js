import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const { Kakao } = window;

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      scope: 'profile_nickname, profile_image, account_email, gender',
      success: function (authObj) {
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            const kakao_account = res.kakao_account;
          },
        });
        fetch('http://12.34.5.678:8000/users/signin', {
          method: 'GET',
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(data => {
            if (data) {
              try {
                sessionStorage.setItem('token', data.token);
              } catch (err) {
                alert(err);
              }
            } else {
              alert('로그인 실패');
            }
          });
        navigate('/');
      },
    });
  };

  const kakaoLogout = () => {
    if (!Kakao.Auth.getAccessToken()) {
      return;
    }
    Kakao.Auth.logout(response => {
      alert('로그아웃 되었습니다.');
      window.location.href = '/login';
    });
  };

  return (
    <LoginContainer>
      <LoginTitle color="#1f8ce6" onClick={goToMain}>
        README
      </LoginTitle>
      <LoginBoxContainer>
        <Img
          src="https://cdn2.iconfinder.com/data/icons/knowledge-is-power/60/book-open-256.png"
          alt=""
        />

        <a href={kakaoLogin}>
          <KakaoImg
            src="/images/kakao_login_large_wide.png"
            alt=""
            onClick={kakaoLogin}
          />
        </a>
        <a href={kakaoLogout}>
          <LogoutBox onClick={kakaoLogout}>로그아웃</LogoutBox>
        </a>

        <SignupBtn color="white">회원가입</SignupBtn>
        <LoginBtn color="gray">로그인</LoginBtn>
        <SignupChild>
          14세 미만 회원가입&nbsp;
          <Arrow
            src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/next-right-arrow-botton-1024.png"
            alt="arrow"
          />
        </SignupChild>
      </LoginBoxContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eaf6ff;
  height: 100vh;
  font-family: sans-serif;
`;

const LoginBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 628px;
`;

const LoginTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  width: 100%;
  height: 42px;
  border-bottom: 1px solid lightgray;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

const Img = styled.img`
  width: 175px;
  margin-bottom: 50px;
`;

const LogoutBox = styled.div`
  height: 51px;
  width: 340px;
  background-color: #fee500;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

const KakaoImg = styled.img`
  width: 340px;
`;

const SignupBtn = styled.button`
  width: 340px;
  height: 51px;
  background-color: #1f8ce6;
  border-radius: 5px;
  color: ${({ color }) => color};
  border: 1px solid #0477d9;
  font-size: 16px;
  margin: 10px 0;
`;

const LoginBtn = styled.button`
  width: 340px;
  height: 51px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  color: ${({ color }) => color};
  font-size: 16px;
`;

const SignupChild = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin: 25px 0;
  color: gray;
  font-weight: bold;
`;

const Arrow = styled.img`
  width: 13px;
`;

export default Login;
