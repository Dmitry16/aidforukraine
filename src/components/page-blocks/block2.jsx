import Typography from '@mui/material/Typography';
import PageBlock from '../page-block';

export default function Block2() {
    return (
        <>
            <PageBlock>
                <Typography
                    variant="h2"
                    noWrap
                    sx={{ mr: 2,
                        display: 'flex',
                        marginTop: '300px',
                        height: '400px',
                    }}
                >
                    we are very gratefull for your help
                </Typography>
            </PageBlock>
        </>
    );
}
