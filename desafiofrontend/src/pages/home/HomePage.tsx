import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px auto;
  max-width: 1920px;
  padding: 0 1rem;
  position: relative;
`

function Home() {
    return (
        <>
            <Navbar />
        </>
    );
}

export default Home;
