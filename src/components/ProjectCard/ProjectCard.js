import React from 'react';
import { Card, CardContent, Typography, CardActionArea, Box, Button, Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { FaGithub } from "react-icons/fa6";
import theme from '../../theme';

import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, link, linkName, imageUrl, }) => {

  var [givenLinkName] = useState('');
  givenLinkName = linkName;

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
          <CardActionArea  href={link} target="_blank" rel="noreferrer">
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
              <Box className="tags" sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1, justifyContent: 'space-between'}}>
                  {tags.map((tag, index) => (
                      <Box
                        key={index}
                        sx={{
                          backgroundColor: 'rgba(45, 142, 191,.2)',
                          color: 'rgb(94, 167, 212)',
                          borderRadius: '20px',
                          width: 'auto', 
                          textAlign: 'center',
                          p: 1,
                          fontSize: '0.65rem',
                          fontWeight: 'bold',
                          border: '0.5px solid rgba(54, 122, 191, 0.56)',
                          paddingBottom: '5px'
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
    </ThemeProvider>
  );
};

export default ProjectCard;
