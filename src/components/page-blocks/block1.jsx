import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PageBlock from "../page-block";
import Image from "../../assets/img/heros.jpg";

export default function Block1() {
  return (
    <PageBlock bgImg={Image}>
      <Box
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
    </PageBlock>
  );
}
