import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  .page-content {
    padding: 0 1.5rem;
    padding-top: 5rem;
    min-height: calc(100vh - 5rem);

    @media only screen and (min-width: 1024px) {
      padding: 0 4rem;
      padding-top: 6rem;
      min-height: calc(100vh - 6rem);
    }
  }
`;

function AppLayout() {
  return (
    <Wrapper>
      <Navbar />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer />
    </Wrapper>
  );
}

export default AppLayout;
