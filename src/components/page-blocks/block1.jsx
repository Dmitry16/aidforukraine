import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PageBlock from "../page-block";
import Image from "../../assets/img/heros.jpg";
import ScrollTop from "../scroll-to-top";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from "@mui/material/styles";

export default function Block1(props) {
  const theme = useTheme();

  return (
    <PageBlock bgImg={Image}>
      <Box id="home"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "75%",
          color: "#fff",
          padding: { xs: "100px 0 30px", lg: "120px 0 60px" },
          alignItems: "center",
          fontSize: { xs: "26px", sm: "42px", md: "52px", lg: "62px" },
          textAlign: "center",
        }}
      >
        <Typography variant="h2">
          we are very gratefull for your help
        </Typography>
      </Box>
      <ScrollTop {...props}>
        <Box
          sx={{
            color: '#fff',
            backgroundColor: theme.palette.primary.main,
          }}
        >
        {/* <Fab color="primary" size="large" variant="circular" aria-label="scroll back to top"
        > */}
          <KeyboardArrowUpIcon />
        </Box>
        {/* </Fab> */}
      </ScrollTop>
    </PageBlock>
  );
}
