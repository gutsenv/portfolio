import styled from "styled-components";

const Wrapper = styled.div`
  height: 6rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;

  p {
    font-size: 1rem;
    color: #a0a0a0;
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
