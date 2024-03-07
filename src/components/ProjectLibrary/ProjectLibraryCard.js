import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Card from '@mui/material/Card';
import { CardActionArea, CardContent, Typography, Box } from '@mui/material';
import { FaGithub } from "react-icons/fa6";
import statusColors from './../../data/statuscolors.json';
import './ProjectLibrary.css';

const getStatusColor = (statusName) => {
    return statusColors[statusName];
};

const ProjectLibraryCard = ({ title, description, tags, year, status, link, linkName, imageUrl }) => {

    var [givenLinkName] = useState('');
    givenLinkName = linkName;

    const [isExpanded, setIsExpanded] = useState(false);

    const descriptionLines = description.split('\n');

    return (
        <>
         <div className="library-card-wrapper">
             <Card
            className="library-card"
            sx={{
              
                mb: 2, // margin-bottom for spacing between card
                background: 'linear-gradient(145deg, lightblue, white)', // gradient background
                border: 1, // Adjust the border size as needed
                borderColor: 'lightBlue', // Replace with the actual color you want
                borderRadius: '16px', // rounded corners
                overflow: 'hidden', // ensure the content doesn't overflow the rounded corners
                boxShadow: 3, // shadow for the card to raise it a bit
                
            }}
            raised
            onClick={() => setIsExpanded(!isExpanded)} // Toggle isExpanded state on click
            >
            <CardActionArea  href={link} target="_blank" rel="noreferrer">
                <CardContent>
                    {imageUrl && (
                        <LazyLoadImage src={`${process.env.PUBLIC_URL}/${imageUrl}`} alt={title} className="project-image" />
                        )}
                    <Typography className="title" gutterBottom variant="h5" component="div" >
                        {title}
                        <Typography className='year'>   
                        <Typography className='status'>
                        <Box
                            sx={{
                            display: 'inline',
                            alignItems: 'baseline',
                            backgroundColor: getStatusColor(status).background,
                            color: getStatusColor(status).text,
                            borderRadius: '20px',
                            width: 'auto', 
                            textAlign: 'center',
                            verticalAlign: 'center',
                            p: 1,
                            fontSize: '0.65rem',
                            fontWeight: 'bold',
                            border: getStatusColor(status).border,
                            marginRight: '10px',
                            padding: '5px',
                            paddingBottom: '2px'
                            }}
                        >
                            {status}
                        </Box>
                        </Typography>
                            {year}
                        </Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="description">
                    {descriptionLines.map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            {index < descriptionLines.length - 1 && <br />} {/* Add a line break except for the last line */}
                        </React.Fragment>
                     ))}
                    </Typography>
                    <Box className="tags" sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1, justifyContent: 'space-between' }}>
                        <Box className="tags" sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1,}}>
                            {tags.map((tag, index) => (
                            <Box
                                key={index}
                                sx={{
                                fontFamily: 'Overpass, sans serif',
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
                        {givenLinkName ? (
                            givenLinkName === 'Github' ? (
                                <a href={link} target='_blank' rel='noreferrer'><button className="Button-card" sx={{ display: 'flex', borderRadius: '20px' }}>
                                {linkName} <i><FaGithub /></i>
                                </button></a>
                            ) : (
                                <a href={link} target='_blank' rel='noreferrer' style={{display: 'flex', borderRadius: '20px'}}><button className="Button-card" sx={{ display: 'flex', borderRadius: '20px' }}>
                                {linkName} <span className='card-arrow'>&#10230;</span>
                                </button></a>
                            )
                            ) : null}
                    </Box> 
                </CardContent>
            </CardActionArea>
            </Card>
            </div>
        </>
    );
};

export default ProjectLibraryCard;