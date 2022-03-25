import Typography from '@mui/material/Typography';
import PageBlock from '../page-block';
import Image from '../../assets/img/heros.jpg';
import Box from '@mui/material/Box';

export default function Block1() {
    return (
        <>
            <PageBlock img={Image}>
                <Box
                    sx={{
                        display: 'flex',
                        margin: '100px',
                        fontSize: '32px',

                    }}
                >
                    <Typography
                        variant="h2"
                        noWrap
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }}}
                    >
                        we are very gratefull for your help
                    </Typography>
                </Box>
            </PageBlock>
        </>
    );
}
