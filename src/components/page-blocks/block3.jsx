import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import PageBlock from "../page-block";
import img from "../../assets/img/how-help1.jpg";

export default function Block3() {
  return (
    <PageBlock>
      <Box id="how"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          padding: "3%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", md: "50%" },
            paddingRight: "3%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              fontSize: { xs: "16px", md: "28px" },
            }}
          >
            <Typography variant="h2" noWrap>
              How you can help
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              paddingTop: "1%",
              fontSize: { xs: "16px", md: "20px", lg: "22px" },
              width: "100%",
            }}
          >
            <Typography variant="p">
              We receive a lot of humanitarian shipments and a big logistical
              challenge has been created. By following our instructions, you
              will facilitate our work. Packing goods on pallets in accordance
              with our recommendations will increase our capacity and unload
              queues of trucks waiting to be unloaded.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            width: { xs: "100%", md: "400px" },
            height: "300px",
          }}
        />
      </Box>
    </PageBlock>
  );
}
