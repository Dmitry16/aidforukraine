import React, { useCallback, useState } from "react";
import { Box, Button, createTheme, Grid, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  AccountCircle,
  AirlineSeatReclineNormal,
  AlternateEmail,
  CorporateFare,
  LocalShipping,
  Phone,
} from "@mui/icons-material";
import BoxForm from "./BoxForm";
import { getCodeId } from "./helpers";

const defaultTheme = createTheme({});
const lsIDKey = "drohobych-id";
const lsHistoryKey = "drohobych-history";
let currentUserId = localStorage.getItem(lsIDKey);
if (!currentUserId) {
  currentUserId = getCodeId();
  localStorage.setItem(lsIDKey, currentUserId);
}

const googleFormId = "1FAIpQLSfOF7IuG9a6ifRW1qaUGk8OUYlHX0MCnLeKm7vJ1LoPtOtvGg";
const fieldsId = {
  edit: "entry.1592439973",
  orderId: "entry.1760110671",
  userId: "entry.994331479",
  organisationName: "entry.",
  contactPerson: "entry.",
  phoneNumber: "entry.",
  email: "entry.",
  driverName: "entry.",
  driverPhoneNumber: "entry.",
  departureDate: "entry.",
  arrivalDate: "entry.",
  arrivalTime: "entry.",
  vehicleRegistrationNumber: "entry.",
  trailerRegistrationNumber: "entry.",
  boxes: "entry.1592439973",
  notes: "entry.",
};

const formUrl = `https://docs.google.com/forms/u/0/d/e/${googleFormId}/formResponse`;
const defaultFormState = { [fieldsId["userId"]]: currentUserId };
const variant = "standard";

const InventoryForm = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const [boxes, setBoxes] = useState({});
  const [isLoading, setLoading] = useState(false);
  const ordersHistory = localStorage.getItem(lsHistoryKey) || { data: [] };

  const onChange = ({ target: { name, value } }) =>
    setFormState((s) => ({ ...s, [name]: value }));

  const onSubmit = useCallback(
    (e) => {
      setLoading(true);
      const currentOrder = {
        ...formState,
        [fieldsId.orderId]: getCodeId(),
        [fieldsId.boxes]: JSON.stringify({ packs: Object.values(boxes) }), // TODO: add validation
      };
      let searchParams = new URLSearchParams(currentOrder);
      fetch(formUrl + "?" + searchParams.toString(), {
        method: "POST",
        mode: "cors",
      })
        .then(({ ok }) => {
          if (ok) {
            const presaved = localStorage.getItem(lsHistoryKey);
            const ordersHistory = presaved
              ? JSON.parse(presaved)
              : { data: [] };
            console.log(presaved, ordersHistory);
            ordersHistory.data.push(Object.values(currentOrder));
            localStorage.setItem(lsHistoryKey, JSON.stringify(ordersHistory));
            setFormState(defaultFormState);
          }
        })
        .finally(() => setLoading(false));
    },
    [formState, boxes, defaultFormState]
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Box
          className={"inventory-form"}
          component="form"
          sx={{
            width: "100%",
            "& .MuiTextField-root": { m: 1, maxWidth: "18ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Button disabled={isLoading} onClick={onSubmit} variant="contained">
              Submit
            </Button>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField label="Contact Person Name" variant={variant} />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Phone sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField label="Contact Person Phone" variant={variant} />
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AirlineSeatReclineNormal
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField label="Driver Name" variant={variant} />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Phone sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField label="Driver Phone" variant={variant} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <CorporateFare
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField label="Organization Name" variant={variant} />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AlternateEmail
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField label="Email" variant={variant} />
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <LocalShipping
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    label="Vehicle registration Number"
                    variant={variant}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <LocalShipping
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    label="Trailer registration Number"
                    variant={variant}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <BoxForm boxes={boxes} setBoxes={setBoxes} />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default InventoryForm;

//const BoxForm = () => (

// <div style={{display: 'flex'}}>
//     <div style={{display: 'flex', flexDirection: 'column', border: '1px solid #eee', padding: 10, margin: 20}}>
//     <span><SvgIcon><Inventory/></SvgIcon><b>Box 1</b></span>
//     <TextField onChange={onChange} name={fieldsId.type} value={formState[fieldsId.type] || ""} label="Type"
//                        variant="outlined"/>
//             <TextField onChange={onChange} name={fieldsId.amount} value={formState[fieldsId.amount] || ""}
//                        label="Amount"
//                        variant="outlined"/>
//             <TextField onChange={onChange} name={fieldsId.weight} value={formState[fieldsId.weight] || ""}
//                        label="Weight"
//                        variant="outlined"/>
//
//         </div>
//     </div>
// )
