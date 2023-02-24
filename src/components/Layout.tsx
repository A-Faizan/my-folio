import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import { Box, Grid, Modal, Typography, useTheme } from "@mui/material";
import Ripple from "./animations/Ripple";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Resume from "./resume/Resume";
import Contact from "./contact/Contact";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

interface DivProps {
  transform: string;
}
const RotatedDiv = styled.div<DivProps>`
  z-index: 0;
  background-color: black;
  border: 1.5px solid black;
  height: 530px;
  transform: ${(props) => props.transform};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BGDiv = styled.div`
  /* background-image: url("/images/bg2.jpg"); */
  background: #f0f7fb;
  background-position: center;
  /* filter: brightness(90%); */
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 800px;
`;

const Layout = () => {
  const [modal, setModal] = useState(false);
  const colorMode = React.useContext(ColorModeContext);
  console.log("colorMode", colorMode);

  // const handleType = (count: number) => {
  //   // access word count number
  //   console.log(count)}
  // }

  const theme = useTheme();
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  const handleClose = () => setModal(false);

  return (
    <>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            display: "flex",
            justifyConent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </Box>
      </Modal>
      <div style={{ overflowX: "hidden" }}>
        <BGDiv>
          <Navbar theme={theme} />
          <Grid container height="600px">
            <Grid
              item
              xs={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Wrapper>
                <RotatedDiv transform="rotate(32deg) translateX(120px) translateY(-60px)" />
                <RotatedDiv transform="rotate(32deg) translateX(150px) translateY(-90px)" />
                <RotatedDiv transform="rotate(32deg) translateX(180px) translateY(-125px)" />
              </Wrapper>
              <div
                style={{
                  zIndex: "1",
                  borderRadius: "100%",
                  backgroundImage: "url(/images/display.jpg)",
                  backgroundSize: "cover",
                  boxShadow:
                    "inset 0 -30em 30em rgba(0, 0, 0, 0.1),0px 0px 15px rgba(255,255,255, 1),1.5em 1em 0.2em rgb(211,165,131),-1.5em -1em 0.2em rgba(52,82,255, 1)",
                  height: "21rem",
                  width: "21rem",
                }}
              >
                <Ripple modal={modal} setModal={setModal} />
              </div>
            </Grid>

            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              item
              xs={5}
            >
              <Typography variant="h3" color="black">
                Hello! I'm Faizan Ali Memon
              </Typography>
              <Typography variant="h2" color="black" fontWeight="bolder">
                <Typewriter
                  words={["A DEVELOPER", "A FREELANCER"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={40}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  // onType={handleType}
                />
              </Typography>
            </Grid>
          </Grid>
        </BGDiv>
        <div id="about">
          <About />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
