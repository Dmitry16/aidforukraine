import Header from '../components/header';
import PageBlock from '../components/page-block';
import Typography from '@mui/material/Typography';
import Image from '../assets/img/heros.jpg';

function MainPage() {
  return (
    <>
        <Header />
        <PageBlock img={Image}>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' }}}
            >
                LOGO
            </Typography>
        </PageBlock>
        <PageBlock>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' }}}
            >
                LOGO
            </Typography>
        </PageBlock>
        <PageBlock>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' }}}
            >
                LOGO
            </Typography>
        </PageBlock>
    </>
  );
}

export default MainPage;