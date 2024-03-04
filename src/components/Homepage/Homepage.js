import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard'; // Adjust the path as necessary
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import NavigationAppBar from '../AppBar/NavigationAppBar';
import { Grid, Link, TextField, Button, Container, Typography, Box, } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './Homepage.css'; // Your custom CSS for layout


const HomePage = () => {
  // Dummy data for the projects
  const projects = [
    {
      title: 'C.H.A.I.R.S Demo',
      description: 'A Unity project demo with the objective to showcase the potential concept of a survival horror experience with a unique twist.',
      tags: ['C#', 'UNITY', 'JSON', 'UI/UX'],
      imageUrl: 'images/ChairsThumb.png',
    },
    {
      title: 'Impact Code Finder',
      description: 'A Discord bot with the objective to fetch and notify users of the latest promotional codes for the game, Genshin Impact.',
      tags: ['JAVASCRIPT', 'SQL', 'DISCORD.JS', 'WEB SCRAPING'],
      imageUrl: 'images/GenshinImpactCodeFinderIcon.png',
    },
    {
      title: 'The Adventures Of Jack II',
      description: 'A 2.5D Unity Platformer',
      tags: ['C#', 'SQL', 'JSON', 'PYTHON'],
      imageUrl: 'images/TAOJ2.png',
    }, 
    
    // ... other projects
  ];


  const experience = [
    {
      JobTitle: 'IT Technician',
      Company: 'The Chamberlain Group',
      description: 'Built, prepared, and configured numerous computer workstations, integrating them seamlessly into the network infrastructure. Conducted repairs on many workstation and laptops, including screen, battery, and storage replacements. Often diagnosed and resolved network issues within the workspace.',
      tags: '',
      StartDate: '2020',
      EndDate: 'PRESENT',
    }
  ];

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& $notchedOutline': {
              borderColor: '#94A6B8', // default border color
            },
            '&:hover $notchedOutline': {
              borderColor: '#94A6B8', // border color on hover (optional, can be changed)
            },
            '&$focused $notchedOutline': {
              borderColor: 'green', // border color when the input is focused
            },
            '& input': {
              color: 'white', // input text color
            },
          },
        },
      },
    },
    palette: {
      mode: 'dark', // This can help ensure that the input text is white
    },
  });
  
  return (
    <div>
      <NavigationAppBar />
      
      <Container maxWidth="lg" >
        <Typography id="experience" variant="h5" sx={{ color: '#94A6B8', fontFamily: 'Overpass, sans serif', fontWeight: 'bold', textAlign: 'left'}}>
          Experience
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', gap: 2 }}>
          {experience.map((experience, index) => (
            <ExperienceCard 
              key={index}
              JobTitle={experience.JobTitle}
              Company={experience.Company}
              description={experience.description}
              tags={experience.tags}
              StartDate={experience.StartDate}
              EndDate={experience.EndDate}
            />
          ))}
         <button className='button'>View Full Resume <span className='arrow'>&#10230;</span></button>
        </Box>
        <Typography id="portfolio" variant="h5" sx={{ marginTop: 5, color: '#94A6B8', fontFamily: 'Overpass, sans serif', fontWeight: 'bold', textAlign: 'left'}}>
          Portfolio
        </Typography>
      
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', gap: 2 }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              
            />
          ))}
          <button className='button'>View Project Library <span className='arrow'>&#10230;</span></button>
        </Box>
        <Typography id="contact" variant="h5" sx={{ marginTop: 15, color: '#94A6B8', fontFamily: 'Overpass, sans serif', fontWeight: 'bold', textAlign: 'left'}}>
          Contact Me
        </Typography>
        <Grid  container spacing={20}> 
          <Grid item xs={5} md={6}>
            <Typography variant="subtitle1" sx={{ color: '#94A6B8', fontFamily: 'Overpass, sans serif', fontWeight: '300', textAlign: 'left'}}>
            Feel free to contact me for any questions or concerns!
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#94A6B8', fontFamily: 'Overpass, sans serif', fontWeight: '300', textAlign: 'left'}}>
            Email: Isaacnunez2002@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>

        <ThemeProvider theme={theme}> 
        <TextField fullWidth label="Name" variant="outlined" margin="normal" />
        <TextField fullWidth label="Email" variant="outlined" margin="normal" type="email" />
        <TextField fullWidth label="Message" variant="outlined" margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary">
          Send Email
        </Button>
        </ThemeProvider>
      </Grid>

        </Grid>
       

        {/* Credits */}
        <Typography maxWidth="500px" variant='subtitle2' color='#627a93' align='left' className="project-title" sx={{ marginTop: 2, paddingBottom: '40px'}}>
        Mocked up in <Link href="https://www.adobe.com/products/photoshop.html" underline="none" color="#367abf">Adobe Photoshop</Link> and coded in <Link href="https://code.visualstudio.com/" underline="none" color="#367abf">Visual Studio Code </Link> 
        by the man himself, me. Built with <Link href="https://react.dev/" underline="none" color="#367abf">React.js</Link>  and <Link href="https://mui.com/material-ui/" underline="none" color="#367abf">Material UI</Link>, 
        deployed with <Link href="https://pages.github.com/" underline="none" color="#367abf">Github Pages</Link>. All text is set in the <Link href="https://fonts.google.com/specimen/Overpass" underline="none" color="#367abf">Overpass</Link> typeface.
        </Typography>
      </Container>
    </div>
  );
};


export default HomePage;
