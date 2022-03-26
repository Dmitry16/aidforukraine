import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import PageBlock from '../page-block';
import img from '../../assets/img/ze1.jpg';

export default function Block2() {
    return (
        <>
            <PageBlock>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', md: 'row'},
                        justifyContent: 'center',
                        // width: '50%',
                        padding: '3%',
                    }}
                >
                    <Box sx={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        width: {xs: '100%', md: '400px'},
                        height: '300px',
                    }} />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: {xs: '100%', md: '50%'},
                            paddingLeft: '3%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                fontSize: {xs: '16px', md: '28px'},
                            }}
                        >
                            <Typography
                                variant="h2"
                                noWrap
                            >
                                We believe in victory!
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                paddingTop: '1%',
                                fontSize: {xs: '16px', md: '20px', lg: '22px'},
                                width: '100%',
                            }}
                        >
                            <Typography
                                variant="p"
                            >
                                We are the target of unjustified aggression by a neighboring country.
                                At the beginning of the war, hardly anyone in the world believed that we had any chance.
                                It quickly turned out that our will to fight and the help coming from the civilized part of
                                the world became a difficult barrier for Russia to overcome.
                                Unfortunately, it is not known how long the war will last, so we are calling for the supply of products
                                that are in short supply in the war. We believe that together we will be able to defeat the enemy and
                                that Putin's regime will also fall.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </PageBlock>
        </>
    );
}
