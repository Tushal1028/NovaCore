import React from 'react'
import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const About = () => {
    return (
        <>
            <div style={{ backgroundColor: '#FFFFFF',paddingTop:'5.1vh' }}>
                <Box sx={{ display: 'flex', height: '90vh', alignItems: 'center' }}>
                    <Box sx={{ width: '70%' }}>
                        <Typography variant="h3" component="h3" style={{ fontWeight: '600', textAlign: 'center' }}>About Us</Typography>
                        <img src="/team.png" alt="" />
                    </Box>
                    <Box>
                        <Typography variant="h3" component="h3" style={{ fontWeight: '700' }}>PHOTOS <span style={{ color: '#FFDC0E' }}>FOR EVERYONE</span></Typography>
                        <Typography variant="body1" gutterBottom sx={{ width: '70%' }}>
                            <strong>NovaCore</strong> is a india-based website dedicated for sharing stock photography under the NovaCore license.NovaCore allows photographers to upload photos to its website, which are then curated by a team of photo editors.In NovaCore we are aspiring to be one of the largest photography suppliers on the internet.
                        </Typography>
                    </Box>
                </Box>

                {/* Page 2 our team */}
                <Box>
                    <Typography variant="h3" component="h3" style={{ fontWeight: '600', textAlign: 'center', paddingBottom: '6px', borderBottom: '10px solid #FFDC0E', borderBottomWidth: '10px', margin: '0px 630px' }}>OUR TEAM</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image="/TT.jpeg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: '700' }}>
                                    Tushal <span style={{ color: '#FDDE0C' }}>Barvaliya</span>
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Student At L.J University. And A Fullstack web devloper In React and Django
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                visit
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image="/user11.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: '700' }}>
                                    Panth <span style={{ color: '#FDDE0C' }}>Gadani</span>
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Student At L.J University. And A Fullstack web devloper In React and Django
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                visit
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image="/user11.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: '700' }}>
                                    Mayur <span style={{ color: '#FDDE0C' }}>Dodiya</span>
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Student At L.J University. And A Fullstack web devloper In React and Django
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                visit
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', margin: '30px 100px' }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image="/user11.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: '700' }}>
                                    Hitarth <span style={{ color: '#FDDE0C' }}>Barvaliya</span>
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Student At L.J University. And A Fullstack web devloper In React and Django
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                visit
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image="/user11.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: '700' }}>
                                    Dhami <span style={{ color: '#FDDE0C' }}>Gadani</span>
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Student At L.J University. And A Fullstack web devloper In React and Django
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                visit
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </div>
        </>
    )
}

export default About