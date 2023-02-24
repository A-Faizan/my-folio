import { Grid, Typography } from "@mui/material";
import React from "react";

interface SkillType {
  title: string;
  percentage: string;
}
function About() {
  const skills: SkillType[] = [
    {
      title: "HTML5 & CSS3",
      percentage: "92%",
    },
    {
      title: "Javascript",
      percentage: "72%",
    },
    {
      title: "React.js",
      percentage: "80%",
    },
    {
      title: "Next.js",
      percentage: "42%",
    },
    {
      title: "Node.js",
      percentage: "52%",
    },
    {
      title: "Express.js",
      percentage: "52%",
    },
    {
      title: "MongoDB",
      percentage: "62%",
    },
    {
      title: "Docker",
      percentage: "52%",
    },
  ];
  return (
    <>
      <div>
        <Typography textAlign="center" color="#999999" variant="h4">
          Knowledge & Skills
        </Typography>
      </div>
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={8} item>
          <Typography variant="h5" color="black">
            Hi there! I'm a front-end React developer with six months of
            experience. I have a passion for creating beautiful and engaging
            user experiences on the web. I love staying up-to-date with the
            latest technologies and trends, and I'm always looking for new ways
            to push the boundaries of what's possible online. My expertise lies
            in React.js and the surrounding ecosystem, including Redux, React
            Router, and other popular libraries. I have experience building
            responsive and scalable web applications using modern front-end
            development tools. I'm passionate about learning and growing as a
            developer, and I believe that staying curious is the key to success
            in this field. I'm excited to continue honing my skills as a
            frontend developer, and I'm always open to new opportunities to
            collaborate on exciting projects. If you're interested in working
            together or just want to chat about web development, feel free to
            get in touch!
          </Typography>
          {skills.map((item) => (
            <div
              style={{
                background:
                  "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
                borderRadius: "50px",
                display: "flex",
                padding: "8px 10px",
                alignItems: "center",
                margin: 15,
                width: item.percentage,
              }}
            >
              <Typography
                pl={2}
                color="white"
                fontWeight="bold"
                letterSpacing={2}
                variant="subtitle1"
              >
                {item.title}
              </Typography>
              <div
                style={{
                  background:
                    "linear-gradient(179.4deg, rgb(12, 20, 69) -16.9%, rgb(71, 30, 84) 119.9%)",
                  borderRadius: "50px",
                  padding: "10px 30px",
                  fontWeight: "bold",
                  marginLeft: "auto",
                  color: "white",
                }}
              >
                {item.percentage}
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default About;
