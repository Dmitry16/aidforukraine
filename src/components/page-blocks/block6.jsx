import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import Divider from "@mui/material/Divider";

import PageBlock from "../page-block";

export default function Block6() {
  return (
    <PageBlock>
      <Box id="contacts"
        sx={{
          display: "flex",
          flexDirection: "column",
          // flexDirection: { xs: "column", md: "column" },
          justifyContent: "center",
          padding: { xs: '0', md: '3%' },
        }}
      >
        <Box
          sx={{
            padding: "10px 30px 0",
          }}
        >
          <Typography variant="h2">Contacts</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            paddingTop: "3%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginRight: "50px",
              width: "100%",
              border: "1px solid lightgray",
            }}
          >
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOnOutlinedIcon />
                </ListItemIcon>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: { xs: "14px", md: "16px", lg: "18px" },
                    }}
                  >
                      <ListItemText primary="Hub Przemyśl" />
                      <ListItemText primary="Lwowska 154" />
                      <ListItemText primary="37-700 Przemyśl" />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      marginLeft: {xs: '0px', md: '20px'},
                    }}
                  >
                      <object aria-label="map" data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.688126384253!2d22.841996582965884!3d49.77965949960185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b791b9156e5d9%3A0xfebfe81db93043fe!2sInglot!5e1!3m2!1spl!2spl!4v1647588804251!5m2!1spl!2spl"></object>
                  </Box>
                </Box>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <MailOutlinedIcon />
                </ListItemIcon>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: { xs: "14px", md: "16px", lg: "18px" },
                  }}
                >
                  <ListItemText>
                    <a href="mailto:hubperemyshl@gmail.com">
                      hubperemyshl@gmail.com
                    </a>
                  </ListItemText>
                </Box>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <PhoneIphoneOutlinedIcon />
                </ListItemIcon>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: { xs: "14px", md: "16px", lg: "18px" },
                  }}
                >
                  <ListItemText primary="Pawel Chomik (languages – English, Polish, Ukrainian)" />
                  <ListItemText primary="+48 606 88 99 46" />
                  <ListItemText primary="Volodymyr Denysiuk (languages – Polish, Ukrainian, Russian)" />
                  <ListItemText primary="+48 881 649 057" />
                </Box>
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              display: "flex",
              marginRight: "50px",
              width: "100%",
              border: "1px solid lightgray",
            }}
          >
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOnOutlinedIcon />
                </ListItemIcon>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: { xs: "14px", md: "16px", lg: "18px" },
                  }}
                >
                  <ListItemText primary="Drohobych City Council" />
                </Box>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <MailOutlinedIcon />
                </ListItemIcon>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: { xs: "14px", md: "16px", lg: "18px" },
                  }}
                >
                  <ListItemText>
                    <a href="https://bit.ly/3wFLHI7">
                      https://drohobych-rada.gov.ua/
                    </a>
                  </ListItemText>
                </Box>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <PhoneIphoneOutlinedIcon />
                </ListItemIcon>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: { xs: "14px", md: "16px", lg: "18px" },
                  }}
                >
                  <ListItemText primary="Volodymyr Kondziolka  (languages – Polish, Ukrainian, Russian)" />
                  <ListItemText primary="+38 067 67 42 501" />
                  <ListItemText primary="Yurij Yatskiv (languages – Polish, English, Ukrainian, Russian)" />
                  <ListItemText primary="+38 067 67 21 933" />
                  <ListItemText primary="Serhii Zadvornykh (languages – English, German, Ukrainian, Russian)" />
                  <ListItemText primary="+38 093 74 39 273" />
                </Box>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            // height: "450px",
            // width: "500px",
            border: 0,
          }}
        >
        </Box>
      </Box>
    </PageBlock>
  );
}
