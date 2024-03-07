import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard'; // Adjust the path as necessary
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import NavigationAppBar from '../AppBar/NavigationAppBar';
import { Grid, Link, TextField, Button, Container, Typography, Box, AppBar, Toolbar  } from '@mui/material';
import { Link as Links } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { IconContext } from "react-icons";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram, } from "react-icons/fa6";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './Homepage.css'; 
import projects from './../../data/projects.json';
import experience from './../../data/experience.json';

// MUI Theme for buttons
const {palette} = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color : {main: mainColor}});
const defaulTtheme = createTheme({
  palette: {
    default: createColor('#94A6B8'),

  }
});


const HomePage = () => {

  const featureProjects = projects.filter(project => project.featured);
  
  return (
    <div>
      <NavigationAppBar />
      
      <Container maxWidth="lg" >
        <Typography id="experience" variant="h5" sx={{ color: '#94A6B8', fontFamily: 'Overpass, sans serif', fontWeight: 'bold', textAlign: 'left'}}>
          Experience
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', gap: 2, overflow: 'hidden' }}>
          {experience.map((experience, index) => (
            <ExperienceCard 
              key={index}
              JobTitle={experience.JobTitle}
              SubJobTitle={experience.SubJobTitle}
              Company={experience.Company}
              description={experience.description}
              tags={experience.tags}
              StartDate={experience.StartDate}
              EndDate={experience.EndDate}
            />
          ))}
         <a href="files/Isaac_Nunez___Resume_2024.pdf" without rel="noopener noreferrer" target="_blank" style={{ textAlign: 'left'}}><button className='button'>View Full Resume <span className='arrow'>&#10230;</span></button></a>
        </Box>
        <Typography id="portfolio" variant="h5" sx={{ marginTop: 5, color: '#94A6B8', fontFamily: 'Overpass, sans serif', fontWeight: 'bold', textAlign: 'left'}}>
          Featured Projects
        </Typography>
      
        <Box className="grid-container" sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
          {featureProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              linkName={project.linkName}
              imageUrl={project.imageUrl}
              
            />
          ))}
          <HashLink to={`/projectlibrary#projects`} style={{ textAlign: 'left'}}>
          <button className='button'>View Project Library <span className='arrow'>&#10230;</span></button>
          </HashLink>
        </Box>
        <Typography id="contact" variant="h5" sx={{ marginTop: 15, color: '#94A6B8', fontFamily: 'Overpass, sans serif', fontWeight: 'bold', textAlign: 'left'}}>
          Get In Touch
        </Typography>
        <Grid  container spacing={20}> 
          <Grid item xs={15} md={6}>
            <Typography variant="subtitle1" sx={{ color: '#94A6B8', fontFamily: 'Overpass, sans serif', fontWeight: '300', textAlign: 'left'}}>
            Currently looking for new opportunities, so feel free to reach out! 
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#94A6B8', fontFamily: 'Overpass, sans serif', fontWeight: '300', textAlign: 'left'}}>
            Email: Isaacnunez2002@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ThemeProvider theme={defaulTtheme}>
            <a href='mailto:isaacnunez2002@gmail.com'><Button  color="default" variant='outlined' sx={{
                                                                                    borderRadius: '16px', 
                                                                                    paddingTop: '20px', 
                                                                                    paddingBottom: '20px',
                                                                                    paddingRight: '60px',
                                                                                    paddingLeft: '60px',
                                                                                    fontFamily: 'Overpass, sans serif',
                                                                                    fontSize: '1rem',
                                                                                    fontWeight: 'bold',
                                                                                    textAlign: 'center'
                                                                                    }}>Say Hi</Button></a>
            </ThemeProvider>
          </Grid>
        </Grid>

 
      <Toolbar disableGutters sx={{ justifyContent: 'center', paddingY: 1  }}>
            <Box className="appbarbox-homepage" sx={{ display: 'flex', gap: 2, background: 'transparent', paddingX: 3, paddingY: 0.5, flexGrow: 1, justifyContent: 'center' }}>
              <IconContext.Provider value={{ className: "social-icon-homepage", size: 25 }}>
                <a href="https://github.com/Izesik" target="_blank" rel="noopener noreferrer"><FaGithub  /></a>
                <a href="https://www.linkedin.com/in/isaac-nunez-8816a4234/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/_isaacnunezz/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://twitter.com/Izesik" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
              </IconContext.Provider>
            </Box>
          </Toolbar>
       

        {/* Credits */}
        <Typography maxWidth="500px" variant='subtitle2' color='#627a93' align='left' className="project-title" sx={{ marginTop: 5, paddingBottom: '40px'}}>
        Mocked up in <Link href="https://www.adobe.com/products/photoshop.html" underline="none" color="#367abf">Adobe Photoshop</Link> and coded in <Link href="https://code.visualstudio.com/" underline="none" color="#367abf">Visual Studio Code </Link> 
        by the man himself, me. Built with <Link href="https://react.dev/" underline="none" color="#367abf">React.js</Link>  and <Link href="https://mui.com/material-ui/" underline="none" color="#367abf">Material UI</Link>, 
        deployed with <Link href="https://pages.github.com/" underline="none" color="#367abf">Github Pages</Link>. All text is set in the <Link href="https://fonts.google.com/specimen/Overpass" underline="none" color="#367abf">Overpass</Link> typeface.
        </Typography>
      </Container>
    </div>
  );
};


export default HomePage;
