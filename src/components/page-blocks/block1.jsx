import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageBlock from '../page-block';
import Image from '../../assets/img/heros.jpg';

export default function Block1() {
    return (
        <>
            <PageBlock img={Image}>
                <Box
                    sx={{
                        width: '75%',
                        color: '#fff',
                        marginTop: '150px',
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: {sx: '26px', md: '52px', lg: '72px'},
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h2">
                        we are very gratefull for your help
                    </Typography>
                </Box>
            </PageBlock>
        </>
    );
}
