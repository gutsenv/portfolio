import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 10rem;

  p {
    color: #a0a0a0;
  }

  a {
    text-decoration: none;
    color: #fff;
    background: #a0a0a0;
    padding: 0.125rem 1rem;
  }
`;

function Home() {
  return (
    <Wrapper>
      <p>{"/** portfolio website: under construction **/"}</p>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </Wrapper>
  );
}

export default Home;
