import Typography from '@mui/material/Typography';
import PageBlock from '../page-block';

export default function Block6() {
    return (
        <>
            <PageBlock>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }}}
                >
                    Block6
                </Typography>
            </PageBlock>
        </>
    );
}
