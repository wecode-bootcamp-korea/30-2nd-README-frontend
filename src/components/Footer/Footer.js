import React from 'react';
import styled from 'styled-components';
import { FOOTER_DATA, FOOTER_TEXT } from './FooterData';

function Footer() {
  return (
    <FooterWrap>
      <FooterContent>
        <FooterTop>
          {FOOTER_DATA.map(data => (
            <ContentWrap key={data.id}>
              <ContentTitle key={data.id}>{data.name}</ContentTitle>
              {data.subList.map(({ id, content }) => (
                <ContentList key={id}>{content}</ContentList>
              ))}
            </ContentWrap>
          ))}
        </FooterTop>
        {FOOTER_TEXT.map(({ id, content }) => (
          <FooterText key={id}>{content}</FooterText>
        ))}
      </FooterContent>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 2px solid #f0f0f0;
  background-color: honeydew;
  padding: 40px 45px;
  bottom: 0;
`;

const FooterContent = styled.div`
  width: 1150px;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 30px;
`;

const ContentWrap = styled.div``;

const ContentTitle = styled.p`
  margin-bottom: 11px;
  padding: 3px 0;
  font-size: 13px;
  font-weight: bold;
  color: #787878;
`;

const ContentList = styled.p`
  padding: 6px 0;
  font-size: 13px;
  color: #787878;
`;

const FooterText = styled.p`
  padding: 2px 0;
  font-size: 13px;
  color: #787878;
`;

export default Footer;
