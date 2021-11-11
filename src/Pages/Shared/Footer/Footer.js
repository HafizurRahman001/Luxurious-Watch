import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Container>
            <Grid container spacing={2} style={{ alignItems: 'center', marginBottom: '30px' }}>
                <Grid item xs={12} md={3}>
                    <Box sx={{ textAlign: 'left', fontWeight: 'bold', color: 'gray' }}>
                        <Typography variant='p'>
                            Emergency Dental Care
                        </Typography> <br />
                        <Typography variant='p'>
                            Check Up
                        </Typography> <br />
                        <Typography variant='p'>
                            Treatment of Personal Disease
                        </Typography> <br />
                        <Typography variant='p'>
                            Tooth Extraction
                        </Typography> <br />
                        <Typography variant='p'>
                            Check Up
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant='h6' sx={{ color: 'info.main', textAlign: 'left' }}>
                        SERVICES
                    </Typography>
                    <Box sx={{ textAlign: 'left', fontWeight: 'bold', color: 'gray' }}>
                        <Typography variant='p'>
                            Emergency Dental Care
                        </Typography> <br />
                        <Typography variant='p'>
                            Check Up
                        </Typography> <br />
                        <Typography variant='p'>
                            Treatment of Personal Disease
                        </Typography> <br />
                        <Typography variant='p'>
                            Tooth Extraction
                        </Typography> <br />
                        <Typography variant='p'>
                            Check Up
                        </Typography> <br />
                        <Typography variant='p'>
                            Check Up
                        </Typography> <br />
                        <Typography variant='p'>
                            Check Up
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant='h6' sx={{ color: 'info.main', textAlign: 'left' }}>
                        ORAL HEALTH
                    </Typography>
                    <Box sx={{ textAlign: 'left', fontWeight: 'bold', color: 'gray' }}>
                        <Typography variant='p'>
                            Emergency Dental Care
                        </Typography> <br />
                        <Typography variant='p'>
                            Check Up
                        </Typography> <br />
                        <Typography variant='p'>
                            Treatment of Personal Disease
                        </Typography> <br />
                        <Typography variant='p'>
                            Tooth Extraction
                        </Typography> <br />
                        <Typography variant='p'>
                            Check Up
                        </Typography> <br />
                        <Typography variant='p'>
                            Check Up
                        </Typography> <br />
                        <Typography variant='p'>
                            Check Up
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant='h6' sx={{ color: 'info.main', textAlign: 'left' }}>
                        OUR ADDRESS
                    </Typography>
                    <Box sx={{ textAlign: 'left', fontWeight: 'bold', color: 'gray' }}>
                        <Typography variant='p'>
                            NewYourk House - 1010, Handson Handi
                        </Typography> <br />

                        <Box sx={{ fontSize: '25px', display: 'flex', margin: '10px 0px' }}>
                            <Box sx={{ width: '18%', paddingLeft: '12px', border: '1px solid gray', borderRadius: '50%', height: '49px', marginRight: '17px', paddingTop: '4px' }}>
                                <i className="fab fa-facebook-f"></i>
                            </Box>
                            <Box sx={{ width: '18%', paddingLeft: '12px', border: '1px solid gray', borderRadius: '50%', height: '49px', marginRight: '17px', paddingTop: '4px' }}>
                                <i className="fab me-4 fa-twitter"></i>
                            </Box>
                            <Box sx={{ width: '18%', paddingLeft: '12px', border: '1px solid gray', borderRadius: '50%', height: '49px', marginRight: '17px', paddingTop: '4px' }}>
                                <i className="fab me-4 fa-google-plus-g"></i>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ color: 'info.main' }}>
                                CALL NOW
                            </Typography>
                            <Box sx={{ backgroundColor: 'blue', padding: '10px 7px', color: 'white', width: '50%', textAlign: 'center' }}>
                                +20140365
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
            <Box style={{
                textAlign: 'center', color: 'gray', padding: '15px 0px'
            }}>
                <Typography variant='h6'>
                    Copy Right 2020, All Right Reserved
                </Typography>
            </Box >
        </Container >
    );
};

export default Footer;