import React from 'react';
import { Card, CardContent, Typography, CardActionArea, Box, Button, Modal, Link} from '@mui/material';
import './ExperienceCard.css';


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

const ExperienceCard = ({ JobTitle, Company, description, tags, StartDate, EndDate }) => {

    return (
        <div className="experience-card-wrapper">
            <Card className="experience-card">
                <CardActionArea>
                    <CardContent>
                        <Typography className="experience-title" >
                            {JobTitle} &bull; <Link href="https://www.thecgroup.com/" underline="none" color="#367abf">{Company}</Link>
                        </Typography>
                        <Typography className="experience-description" sx={{marginTop: 2}}>
                            {description}
                        </Typography>

                        <Typography className="experience-date" sx={{marginTop: 8, textAlign: 'right'}}>
                            {StartDate} &#8212; {EndDate}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>



        </div>



    );
};

export default ExperienceCard;