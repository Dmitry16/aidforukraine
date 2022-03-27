import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import ImgLogo from "../assets/logo.png";

export default function Logo() {
  const theme = useTheme();

  return (
    <>
      <Box
        component="img"
        sx={{
          marginLeft: { xs: "10px", md: "100px" },
          padding: "10px",
          height: 70,
          width: 70,
          maxHeight: { xs: 50, md: 70 },
          maxWidth: { xs: 50, md: 70 },
        }}
        src={ImgLogo}
      />
      <Typography
        variant="p"
        noWrap
        component="div"
        color={theme.palette.primary.gray}
        sx={{ mr: 2, fontSize: { xs: "18px", md: "30px" } }}
      >
        Drohobych City Council
      </Typography>
    </>
  );
}
