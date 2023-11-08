import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {AccessTime} from '@mui/icons-material';

export default function TourCard() {
  return (
    <Grid item xs={12} sm={6} md={3} >
        <Paper elevation={3} >
            <img 
                src="https://velvetescape.com/wp-content/uploads/2009/12/IMG_5455-1280x920.jpeg"
                alt="some pic"
            />
            <Box paddingX={1}>
                <Typography variant="subtitle1" component="h2">
                    Immerse into the Falls
                </Typography>
                <Box 
                    sx={{
                    display: "flex",
                    alignItems: "center"
                    }}>
                    <AccessTime sx={{width: 12.5}}/>
                    <Typography variant="body2" component="p" marginLeft={0.5}>
                        5 hours
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                        }}
                        marginTop={3}
                        >
                    
                    <Rating name='read-only' value={4.5} precision={0.5} size='small'/>
                    <Typography variant="body2" component="p" marginLeft={0.5}>
                        4.5
                    </Typography>
                    <Typography variant="body2" component="p" marginLeft={1.5}>
                        (655 views)
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" component="h2" marginLeft={0}>
                        From C $147
                    </Typography>
                </Box>
            </Box>
            
        </Paper>
    </Grid>
  )
}
