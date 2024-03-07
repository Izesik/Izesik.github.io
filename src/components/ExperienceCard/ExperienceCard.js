import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActionArea, Box, Button, Modal, Link} from '@mui/material';
import './ExperienceCard.css';

const ExperienceCard = ({ JobTitle, SubJobTitle, Company, description, tags, StartDate, EndDate }) => {

    var [givenSubJobTitle] = useState('');
    givenSubJobTitle = SubJobTitle;

    return (
        <div className="experience-card-wrapper">
            <Card className="experience-card">
                <CardActionArea href="https://www.thecgroup.com/" target='_blank' rel='noreferrer'>
                    <CardContent>
                        <Typography className="experience-title" >
                            {JobTitle} &bull; <a className="experience-company-title" href="https://www.thecgroup.com/" >{Company} <span className='company-arrow'>&#10230;</span></a>
                        </Typography>
                        {(givenSubJobTitle) && <Typography className="experience-subtitle">{SubJobTitle}</Typography>}
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