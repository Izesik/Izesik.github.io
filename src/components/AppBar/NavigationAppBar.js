import * as React from 'react';
import { AppBar, Toolbar, Button, Box, Typography, Container, Link } from '@mui/material';
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram, } from "react-icons/fa6";
import { IconContext } from "react-icons";
import './AppBar.css';

const NavigationAppBar = () => {
  return (
    <>
      <AppBar id="about" position="static" sx={{ background: '#0D1F2D', boxShadow: 3, }}>
      <Toolbar disableGutters sx={{ position: 'fixed', top: 0, right: 50, justifyContent: 'flex-end', paddingY: 1  }}>
            <Box className="appbarbox" sx={{ display: 'flex', gap: 2, background: 'transparent', paddingX: 3, paddingY: 0.5, flexGrow: 1, justifyContent: 'right' }}>
              <IconContext.Provider value={{ className: "social-icon", size: 25 }}>
                <a href="https://github.com/Izesik" target="_blank" rel="noopener noreferrer"><FaGithub  /></a>
                <a href="https://www.linkedin.com/in/isaac-nunez-8816a4234/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/_isaacnunezz/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://twitter.com/Izesik" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
              </IconContext.Provider>
            </Box>
          </Toolbar>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'center', paddingY: 1 }}>
            <Box sx={{ display: 'flex', gap: 2, boxShadow: '0px 14px 16px -3px rgba(0,0,0,0.2)', border: '2px solid rgba(54, 122, 191, 0.56)', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', paddingX: 1, paddingY: 0.5}}>
              <a href={'#about'}><Button color="inherit" sx={{ color: 'white', borderRadius: '30px', fontFamily: 'Overpass, sans serif', display: 'flex', alignItems: 'center', justifycontent: 'center', paddingTop: '10px' }}>About</Button></a>
              <a href={'#experience'}><Button color="inherit" sx={{ color: 'white', borderRadius: '30px', fontFamily: 'Overpass, sans serif', display: 'flex', alignItems: 'center', justifycontent: 'center', paddingTop: '10px' }}>Experience</Button></a>
              <a href={'#portfolio'}><Button color="inherit" sx={{ color: 'white', borderRadius: '30px', fontFamily: 'Overpass, sans serif', display: 'flex', alignItems: 'center', justifycontent: 'center', paddingTop: '10px'}}>Portfolio</Button></a>
              <a href={'#contact'}><Button color="inherit" sx={{ color: 'white', borderRadius: '30px', fontFamily: 'Overpass, sans serif', display: 'flex', alignItems: 'center', justifycontent: 'center', paddingTop: '10px'}}>Contact</Button></a>
            </Box>
          </Toolbar>
         
        </Container>
      </AppBar>
     
      <Box sx={{ textAlign: 'center', color: 'white', background: 'navy', paddingY: 4, backgroundImage: 'linear-gradient(180deg, #0D1F2D, #090E10)'}}>
        <Container sx={{ paddingBottom: '125px'}}> 
        <Typography  variant="subtitle2" component="h1" sx={{ textAlign: 'left', fontWeight: 'bold', color: '#fff' }}>
          Hi, my name is
        </Typography>
        <Typography variant="h1" component="h1" sx={{ textAlign: 'left', fontWeight: 'bold', color: '#fff' }}>
          Isaac Nu&#241;ez
        </Typography>
        <Typography className="subtitle" maxWidth="600px" variant="h6" sx={{ fontWeight: 'bold', color: '#94A6B8', textAlign: 'left'}}>
          Software Engineer
        </Typography>
        <Typography className="subtitle" maxWidth="600px" variant="subtitle2" sx={{ color: '#94A6B8', textAlign: 'left'}}>
          I aim to build immersive digital experiences.
        </Typography>
        <Container maxWidth="lg" sx={{ textAlign: 'left' }}>
        </Container>
        <Typography maxWidth="700px" variant='subtitle1' color='#94A6B8' align='left' className="project-title" sx={{ marginTop: 5}}>
        In 2015, I decided to learn and create my own game using Unity3D, and I unknowingly set foot on a path that would lead me deep into the realms of coding and software development. 
        Today, I proudly boast a handful of independent projects that mark significant milestones in my evolving career.
        </Typography>
        <Typography maxWidth="700px" variant='subtitle1' color='#94A6B8' align='left' className="project-title" sx={{ marginTop: 2}}>
        While pursuing my Computer Science degree, I've found my sweet spot in writing code that not only makes games fun but also keeps them running smoothly behind the scenes.
         Imagine crafting a game where every line of code feels like painting on a canvas, both visually stunning and technically sound. 
         That's what I aim for &#8212; creating software that's not just impressive to look at, but also a joy to work with. 
        </Typography>
        <Typography maxWidth="700px" variant='subtitle1' color='#94A6B8' align='left' className="project-title" sx={{ marginTop: 2}}>
        If I'm not writing code, you'll find me struggling to shoot par on the nearest course, getting immersed in all kinds of movies, hanging out with my buddies, or defending Reach from the Covenant. 
        </Typography>
        </Container>
      </Box>
    </>
  );
};

export default NavigationAppBar;
