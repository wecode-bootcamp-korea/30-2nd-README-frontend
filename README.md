## README
- 책과 사람을 읽습니다, README
- 짧은 프로젝트 기간, 적은 인원으로 개발에 집중해야 하므로, 디자인/기획 부분만 모티브 삼아 진행했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 진행하였습니다.

## 프로젝트 기간
2022.03.14.월 ~ 2022.03.25.금

## 프로젝트 참여 인원
프론트 엔드 : <a href="https://velog.io/@junzerokim">김준영</a>, 이희수, <a href="https://velog.io/@dudgus1670">한영현</a><br>
백엔드 : 김지성, 김광일, 임정찬

## 필수 구현 사항
1. 카카오 소셜 로그인 (회원가입 / 로그인)
2. 메인페이지 
- 슬라이드, 전체 카테고리 보기(별도의 페이지로 분리하지 않음)
- 상품 리스트 : 필터링, 페이지네이션 (메인페이지와 합치는 것을 고려)
3. 도서 상세페이지 - 더보기(페이지네이션), 리뷰
4. 장바구니 - 체크박스

## 구현 파트
1. 김준영 : Login/SignUp
2. 이희수 : Nav/Footer/Main
3. 한영현 : Detail/Cart

## 추가 구현 사항
1. 구독 서비스 (셀렉트)
2. 위시 리스트
3. 구매 페이지
4. admin
5. 검색 기능
6. 대여 기능
7. 도서 미리보기(파일을 주고 받기)
8. 상세 페이지 - 정렬, 전권 구매, 선택 구매, 구매시 [구매버튼]이 [보기버튼]으로 바뀜
9. 구매 페이지
10. 배포

## 데모 사진
### 로그인/회원가입
- 카카오 소셜 로그인 구현
- 로그인 시 토큰 값 localStorage에 저장
<img src="https://user-images.githubusercontent.com/96604554/160229945-086f2ad6-4a24-46f4-9d78-ef7b64620e21.gif" width="945" />


### 메인
- slick slider 라이브러리를 사용해 캐러셀 구현
<img src="https://user-images.githubusercontent.com/96604554/160230186-d4b889b0-1a09-4273-9f77-a5e834063db5.gif" width="945" />

- querystring 을 이용해 카테고리별( 판타지, 로맨스 등 ) 필터링 기능 구현
<img src="https://user-images.githubusercontent.com/96604554/160230416-43cfe543-00a5-432e-b3fd-0dec41711bb8.gif" width="945" />

- path parameter 를 통해 상세페이지 이동 기능 구현

### 상세
- 체크박스 기능 구현 ( props, state, set객체 활용 )
<img src="https://user-images.githubusercontent.com/96604554/160230525-a2c6e7ff-09b2-445c-91e7-1afe79bcaae6.gif" width="945" />

- 더보기 기능 구현 ( 페이지 네이션 활용 )
<img src="https://user-images.githubusercontent.com/96604554/160230527-59a0af4c-1fa6-4c1d-b733-e3986fed5501.gif" width="945" />

- 리뷰 기능 구현 ( 토큰을 활용해 댓글 버튼 입력 시 백 엔드로 데이터 저장 및 불러오는 로직 구현 )
<img src="https://user-images.githubusercontent.com/96604554/160230531-7e2162f4-8364-42fc-8cd1-290ae5399270.gif" width="945" />


### 장바구니
- 체크 박스 기능 구현 ( props, state, set객체 활용 )
- set객체에 있는 값들을 Array.from메서드를 활용해 배열로 변환해 백 엔드로 전송함.
<img src="https://user-images.githubusercontent.com/96604554/160230537-0ecf37e5-09a1-4e87-b1c8-d046d4080dfd.gif" width="945" />


## 적용 기술
- Common<br>
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white"><img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">

- Frontend<br>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

## Reference
이 프로젝트는 RIDIBOOKS 사이트를 참조하여 학습목적으로 만들었습니다.<br>
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.<br>
이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.

