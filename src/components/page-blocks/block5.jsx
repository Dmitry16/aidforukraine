import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PageBlock from "../page-block";

export default function Block5() {
  return (
    <>
      <PageBlock>
        <Box
          sx={{
            display: "flex",
            margin: "100px",
            fontSize: "32px",
          }}
        >
          <Typography variant="h2" noWrap>
            Form
          </Typography>
        </Box>
      </PageBlock>
    </>
  );
}
