import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

function LogoTitle() {
  return (
    <Wrapper>
      <LogoContainer>
        <Link href="/">
          <Image fill src="/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
        </Link>
      </LogoContainer>
      <TextContainer>
        회원이 아니신가요?
        <LinkContainer>
          <Link href="/signup">회원가입하기</Link>
        </LinkContainer>
      </TextContainer>
    </Wrapper>
  );
}

export default LogoTitle;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 3rem;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 21rem;
  height: 3.8rem;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  color: #000;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

const LinkContainer = styled.span`
  color: #6d6afe;
  text-decoration: underline;
`;
