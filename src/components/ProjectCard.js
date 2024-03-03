import React from 'react';
import { Card, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import './ProjectCard.css';


const getTagColor = (tagName) => {
    const tagColors = {
        'JavaScript': '#f6ec7c',
        'C#': '#4b922c',
        'Unity': '#5095cf',
        'JSON': '#242421',
        'UI/UX': '#c7c7c7',
        'SQL': '#9580a5',
        'Discord.js': '#3a62ad',
        'Web Scraping': '#d64c8a',
        'Python': '#e0cd2f',
    };
    return tagColors[tagName];
};


const ProjectCard = ({ title, description, tags, imageUrl}) => {

    const imageRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const card = cardRef.current;

    const handleTransitionEnd = (event) => {
      if (event.propertyName === 'opacity' && window.getComputedStyle(image).opacity === '0') {
        image.style.display = 'none';
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


  return (
    <div className="project-card-wrapper" ref={cardRef}>
    <Card
    className="project-card"
      sx={{
        width: 275, // initial width of the card
        mb: 2, // margin-bottom for spacing between card
        background: 'linear-gradient(145deg, lightblue, white)', // gradient background
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
              <img src={imageUrl} alt={title} className="project-image" ref={imageRef}/>
            )}
          <Typography gutterBottom variant="h5" component="div" className="title">
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
                  width: 100,
                  p: 0.5,
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  boxShadow: 3,
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
};

export default ProjectCard;
