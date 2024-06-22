import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 5rem;
  width: 100%;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  background: #fff;
  
  @media only screen and (min-width: 1024px) {
    height: 6rem;
    padding: 0 4rem;
  }

  a {
    text-decoration: none;
    font-size; 1rem;
    color: #a0a0a0;
  }
`;

function Navbar() {
  return (
    <Wrapper>
      <Link to="/">guts.env</Link>
    </Wrapper>
  );
}

export default Navbar;
