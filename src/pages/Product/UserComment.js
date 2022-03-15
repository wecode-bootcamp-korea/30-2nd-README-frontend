import styled from 'styled-components';

function UserComment({ content, userName, commentDate }) {
  return (
    <UserCommentList>
      <UserInfo>
        <UserName>{userName}</UserName>
        <CommentDate>{commentDate}</CommentDate>
      </UserInfo>
      <CommentWrap>
        <CommentContent>{content}</CommentContent>
      </CommentWrap>
    </UserCommentList>
  );
}

const UserCommentList = styled.div`
  display: flex;
  width: 760px;
  height: 113px;
  margin: 10px 30px;
  border-bottom: 1px solid #d1d5d9;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const UserName = styled.div`
  padding: 8px;
  font-size: 15px;
  font-weight: bold;
`;

const CommentDate = styled.div`
  padding: 8px;
  color: #808991;
  font-size: 15px;
`;

const CommentWrap = styled.div`
  width: 690px;
  padding: 10px;
`;

const CommentContent = styled.div`
  width: 670px;
  height: 90px;
  border: 1px solid white;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default UserComment;
