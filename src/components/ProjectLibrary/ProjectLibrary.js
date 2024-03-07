import React , {lazy,  Suspense} from 'react';
import { AppBar, Box, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { FixedSizeList as List } from 'react-window';
import projects from './../../data/projects.json';
import './ProjectLibrary.css';
const ProjectLibraryCard = lazy(() => import('./ProjectLibraryCard'));


function ProjectLibrary() {

    return (
        <> 
        <AppBar  position="static" sx={{ background: '#0D1F2D', boxShadow: 3, }}>
    
        </AppBar>
         <Box  sx={{ textAlign: 'center', color: 'white', background: 'navy', paddingY: 4, backgroundImage: 'linear-gradient(180deg, #0D1F2D, #090E10)'}}>
         <Container id="projects"sx={{ paddingBottom: '125px'}}> 
         <Link to={`/#about`}><button className='back-button' style={{display: 'flex', alignItems: 'last baseline'}}><span className='back-arrow'style={{display: 'flex', alignItems: 'center'}}>&#10229;</span>Go Back </button></Link>
         <Typography variant="h3" sx={{ marginBottom: '40px', color: '#94A6B8', fontFamily: 'Overpass, sans serif', fontWeight: 'bold', textAlign: 'left'}}>
          Project Library
        </Typography>
         <Box className="grid-container" sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
          <Suspense fallback={<div>Loading...</div>}>
          {projects.map((project, index) => (
            <ProjectLibraryCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              year={project.year}
              status={project.status}
              link={project.link}
              linkName={project.linkName}
              imageUrl={project.imageUrl}
              
            />
          ))}
          </Suspense>
        </Box>
          </Container>
         </Box>
         </>
      );
}
export default ProjectLibrary;