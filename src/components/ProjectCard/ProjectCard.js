import React from 'react';
import { Card, CardContent, Typography, CardActionArea, Box, Button, Modal } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

import './ProjectCard.css';

const getTagColor = (tagName) => {
    const tagColors = {
        'JAVASCRIPT': '#f6ec7c',
        'C#': '#4b922c',
        'UNITY': '#5095cf',
        'JSON': '#242421',
        'UI/UX': '#c7c7c7',
        'SQL': '#9580a5',
        'DISCORD.JS': '#3a62ad',
        'WEB SCRAPING': '#d64c8a',
        'PYTHON': '#e0cd2f',
    };
    return tagColors[tagName];
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 600,
  background: '#08141c',
  border: '1px solid rgba(54, 64, 73, 0.3)',
  boxShadow: 24,
  p: 4,
  overflow: 'auto',
  maxHeight: '90vh',
  borderRadius: '15px',
};


const ProjectCard = ({ title, description, tags, imageUrl, sourceCodeLink, liveProductLink}) => {

  const imageRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const card = cardRef.current;

    const handleTransitionEnd = (event) => {
      if (event.propertyName === 'opacity' && window.getComputedStyle(image).opacity === '0.2') {
        image.style.display = 'inline';
      }
    };

    const handleMouseEnter = () => {
      
    };

    const handleMouseLeave = () => {
      
        image.style.display = 'block';
    
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    image.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      image.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("Is imageUrl truthy?", imageUrl);
  return (
    <ThemeProvider theme={theme}>
    <div className="project-card-wrapper" ref={cardRef}>
    <Card
    className="project-card"
      sx={{
        width: 275, // initial width of the card
        mb: 2, // margin-bottom for spacing between card
        background: 'linear-gradient(145deg, lightblue, white)', // gradient background
        border: 1, // Adjust the border size as needed
        borderColor: 'lightBlue', // Replace with the actual color you want
        borderRadius: '16px', // rounded corners
        overflow: 'hidden', // ensure the content doesn't overflow the rounded corners
        boxShadow: 3, // shadow for the card to raise it a bit
        cursor: 'pointer', // change cursor on hover to indicate interactivity
      }}
      raised
    >
      <CardActionArea>
        <CardContent>
        {imageUrl && (
              <img src={`${process.env.PUBLIC_URL}/${imageUrl}`} alt={title} className="project-image" ref={imageRef}/>
            )}
          <Typography className="title" gutterBottom variant="h5" component="div" >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="description">
            {description}
          </Typography>
          <Box className="tags" sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
            {tags.map((tag, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: getTagColor(tag),
                  color: 'white',
                  borderRadius: '10px',
                  width: 75,
                  height: 10, 
                  p: 0.5,
                  fontSize: '0.50rem',
                  fontWeight: 'bold',
                  boxShadow: 3,
                  textShadow: '0px 1px 5px rgba(0, 0, 0, 0.5)', 
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>
         <Box sx={{ textAlign: 'right' }}>
            <Button onClick={handleOpen} className="Button-contained" variant="contained"  size="small" sx={{ marginTop: 2, borderRadius: '20px',}}>
             Learn More
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>

{/* Modal for detailed project view */}
<Modal keepMounted
  open={open}
  onClose={handleClose}
  aria-labelledby="project-detail-modal-title"
  aria-describedby="project-detail-modal-description"
>
  <Box sx={modalStyle}>
    <Typography id="project-detail-modal-title" variant="h6" component="h2" sx={{ textAlign: 'left', fontWeight: 'bold', fontFamily: 'Overpass, sans serif', color: '#fff', }}>
      {title}
    </Typography>
    <Typography id="project-detail-modal-description" sx={{ mt: 2 }}>
      {description}
    </Typography>
    
    <Button href={sourceCodeLink} target="_blank" rel="noopener">View Source Code</Button>
    <Button href={liveProductLink} target="_blank" rel="noopener">View Live Product</Button>
  </Box>
</Modal>

    </div>
    </ThemeProvider>
  );
};

export default ProjectCard;
