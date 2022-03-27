import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import Divider from '@mui/material/Divider';

import PageBlock from '../page-block';

export default function Block6() {
    return (
        <PageBlock>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'column'},
                    justifyContent: 'center',
                    padding: '3%',
                }}
            >
                <Typography variant="h2">
                    Contact Address
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', md: 'row'},
                        justifyContent: 'center',
                        paddingTop: '3%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            marginRight: '50px',
                            width: '100%',
                            border: '1px solid lightgray'
                        }}
                    >
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOnOutlinedIcon />
                                </ListItemIcon>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    fontSize: {xs: '14px', md: '16px', lg: '18px'},
                                }}>
                                    <ListItemText primary="Hub Przemyśl" />
                                    <ListItemText primary="Lwowska 154" />
                                    <ListItemText primary="37-700 Przemyśl" />
                                </Box>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <MailOutlinedIcon />
                                </ListItemIcon>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    fontSize: {xs: '14px', md: '16px', lg: '18px'},
                                }}>
                                    <ListItemText primary="hubperemyshl@gmail.com" />
                                </Box>
                            </ListItem>
                            <Divider />
                            <ListItem>  
                                <ListItemIcon>
                                    <PhoneIphoneOutlinedIcon />
                                </ListItemIcon>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    fontSize: {xs: '14px', md: '16px', lg: '18px'},
                                }}>
                                    <ListItemText primary="Pawel Chomik (languages – English, Polish, Ukrainian)" />
                                    <ListItemText primary="+48 606 88 99 46" />
                                </Box>
                            </ListItem>
                        </List>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            marginRight: '50px',
                            width: '100%',
                            border: '1px solid lightgray'
                        }}
                    >
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOnOutlinedIcon />
                                </ListItemIcon>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    fontSize: {xs: '14px', md: '16px', lg: '18px'},
                                }}>
                                    <ListItemText primary="Hub Przemyśl" />
                                    <ListItemText primary="Lwowska 154" />
                                    <ListItemText primary="37-700 Przemyśl" />
                                </Box>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <MailOutlinedIcon />
                                </ListItemIcon>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    fontSize: {xs: '14px', md: '16px', lg: '18px'},
                                }}>
                                    <ListItemText primary="hubperemyshl@gmail.com" />
                                </Box>
                            </ListItem>
                            <Divider />
                            <ListItem>  
                                <ListItemIcon>
                                    <PhoneIphoneOutlinedIcon />
                                </ListItemIcon>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    fontSize: {xs: '14px', md: '16px', lg: '18px'},
                                }}>
                                    <ListItemText primary="Pawel Chomik (languages – English, Polish, Ukrainian)" />
                                    <ListItemText primary="+48 606 88 99 46" />
                                </Box>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
        </PageBlock>
    );
}
