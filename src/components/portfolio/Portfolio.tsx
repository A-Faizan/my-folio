import { Grid, Typography } from "@mui/material";
import React from "react";

function Portfolio() {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      // height="800px"
    >
      <Grid xs={8} item>
        <Typography variant="h5" color="black">
          Hi there! I'm a front-end React developer with six months of
          experience. I have a passion for creating beautiful and engaging user
          experiences on the web. I love staying up-to-date with the latest
          technologies and trends, and I'm always looking for new ways to push
          the boundaries of what's possible online. My expertise lies in
          React.js and the surrounding ecosystem, including Redux, React Router,
          and other popular libraries. I have experience building responsive and
          scalable web applications using modern front-end development tools.
          I'm passionate about learning and growing as a developer, and I
          believe that staying curious is the key to success in this field. I'm
          excited to continue honing my skills as a frontend developer, and I'm
          always open to new opportunities to collaborate on exciting projects.
          If you're interested in working together or just want to chat about
          web development, feel free to get in touch!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
