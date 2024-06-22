import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 6rem;
  align-items: center;
  padding: 0 4rem;

  a {
    text-decoration: none;
    font-size; 1rem;
    font-weight: 600;
    font-family: sans-serif;
    color: #a0a0a0;
  }
`;

function Navbar() {
  return (
    <Wrapper>
      <Link to="/">LOGO</Link>
    </Wrapper>
  );
}

export default Navbar;
