import styled from "styled-components";

const Wrapper = styled.div`
  height: 6rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;

  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.3);
  }
`;

function Footer() {
  return (
    <Wrapper>
      <p>
        Portfolio Website by Guts{"   "}|{"   "}Version 1.0.0
      </p>
    </Wrapper>
  );
}

export default Footer;
