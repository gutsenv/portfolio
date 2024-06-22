import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 0 4rem;

  p {
    font-size; 1rem;
    font-weight: 600;
    font-family: sans-serif;
    color: #a0a0a0;
  }
`;

function Navbar() {
  return (
    <Wrapper>
      <p>LOGO</p>
    </Wrapper>
  );
}

export default Navbar;
