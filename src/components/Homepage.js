import React from 'react';
import ProjectCard from './ProjectCard'; // Adjust the path as necessary
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import myImage from '../images/GenshinImpactCodeFinderIcon.png'; // Adjust the file name and extension as needed
import './Homepage.css'; // Your custom CSS for layout
import { Button } from '@mui/material';

const HomePage = () => {
  // Dummy data for the projects
  const projects = [
    {
      title: 'C.H.A.I.R.S Demo',
      description: 'A Unity project demo with the objective to showcase the potential concept of a survival horror experience with a unique twist.',
      tags: ['C#', 'Unity', 'JSON', 'UI/UX'],
      imageUrl: '',
    },
    {
      title: 'Impact Code Finder',
      description: 'A Discord bot with the objective to fetch and notify users of the latest promotional codes for the game, Genshin Impact.',
      tags: ['JavaScript', 'SQL', 'Discord.js', 'Web Scraping'],
      imageUrl: '',
    },
    {
      title: 'The Adventures Of Jack II',
      description: 'A 2.5D Unity Platformer',
      tags: ['C#', 'SQL', 'JSON', 'Python'],
      imageUrl: '',
    }
    // ... other projects
  ];

  return (
    <div>
      <Box sx={{ bgcolor: '#082750', color: 'white', p: 3, textAlign: 'left',  height: 200 }}>
        <Container maxWidth="lg">
          <Typography className="name" variant="h3" component="h1" color= 'White'  >
            Isaac Nunez
          </Typography>
          <Typography className="subtitle" variant="subtitle1">
            Software Engineer
          </Typography>
          <Button variant='contained'> DOWNLOAD CV </Button> 
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant='h4' align='left' className="project-title">
          PORTFOLIO
        </Typography>
        <Divider />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', gap: 2 }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={myImage}
            />
          ))}
        </Box>
      </Container>
      <Box sx={{bgcolor: '#082750', height: 500 }}>
            <Container maxWidth='lq'>
            <Typography className="name" variant="h3" component="h1" color= 'White'  >
            ABOUT ME
          </Typography>
            </Container>
      </Box>
    </div>
  );
};


export default HomePage;
