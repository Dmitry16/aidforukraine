import Typography from '@mui/material/Typography';
import PageBlock from '../page-block';
import Image from '../../assets/img/heros.jpg';

export default function Block1() {
    return (
        <>
            <PageBlock img={Image}>
                <Typography
                    variant="h4"
                    // noWrap
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' },
                        marginTop: '300px',
                        // zIndex: 999,
                    }}
                >
                    we are very gratefull for your help
                </Typography>
            </PageBlock>
        </>
    );
}
