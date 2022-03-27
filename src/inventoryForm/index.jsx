import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  createTheme,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
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

const googleFormId = "1FAIpQLSf6Uz-0v73df30PqZ0kPcwkZCLc0GQDLJVbdRrLZx9g3tkwog";
const fieldsId = {
  organisationName: "entry.1120286520",
  contactPerson: "entry.124618937",
  phoneNumber: "entry.2060837920",
  email: "entry.299921223",
  driverName: "entry.1048162980",
  driverPhoneNumber: "entry.604989816",
  departureDate: "entry.",
  arrivalDate: "entry.",
  arrivalTime: "entry.",
  vehicleRegistrationNumber: "entry.1723190947",
  trailerRegistrationNumber: "entry.1504241797",
  boxes: "entry.1889613797",
  notes: "entry.1290381539",
  edit: "entry.705165510",
  orderId: "entry.1959796125",
  userId: "entry.1003640068",
};

// null: entry.1120286520
// VM1460:5 null: entry.124618937
// VM1460:5 null: entry.2060837920
// VM1460:5 null: entry.299921223
// VM1460:5 null: entry.1048162980
// VM1460:5 null: entry.604989816
// VM1460:5 null: entry.1723190947
// VM1460:5 null: entry.1504241797
// VM1460:5 null: entry.1889613797
// VM1460:5 null: entry.1290381539
// VM1460:5 null: entry.1959796125
// VM1460:5 null: entry.1003640068
// VM1460:5 null: entry.705165510
// VM1460:5 null: entry.1131935088_hour
// VM1460:5 null: entry.1131935088_minute
// VM1460:5 null: entry.366275644_year
// VM1460:5 null: entry.366275644_month
// VM1460:5 null: entry.366275644_day
// VM1460:5 null: entry.1678365072_year
// VM1460:5 null: entry.1678365072_month
// VM1460:5 null: entry.1678365072_day

const formUrl = `https://docs.google.com/forms/u/0/d/e/${googleFormId}/formResponse`;
const getEmptyFormState = () => ({
  [fieldsId.userId]: currentUserId,
  [fieldsId.orderId]: getCodeId(),
});
const variant = "standard";

const InventoryForm = () => {
  const [formState, setFormState] = useState(getEmptyFormState());
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
        [fieldsId.boxes]: JSON.stringify({ packs: Object.values(boxes) }), // TODO: add validation,
        [fieldsId.edit]: "testId",
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
            setFormState(getEmptyFormState);
          }
        })
        .finally(() => setLoading(false));
    },
    [formState, boxes]
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Box
          className={"inventory-form"}
          component="form"
          sx={{
            pl: 3,
            pr: 3,
            "& .MuiTextField-root": { m: 1, maxWidth: "18ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    label="Contact Person Name"
                    variant={variant}
                    onChange={onChange}
                    name={fieldsId.contactPerson}
                    value={formState[fieldsId.contactPerson] || ""}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Phone sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    label="Contact Person Phone"
                    variant={variant}
                    onChange={onChange}
                    name={fieldsId.phoneNumber}
                    value={formState[fieldsId.phoneNumber] || ""}
                  />
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AirlineSeatReclineNormal
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    label="Driver Name"
                    variant={variant}
                    onChange={onChange}
                    name={fieldsId.driverName}
                    value={formState[fieldsId.driverName] || ""}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Phone sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    label="Driver Phone"
                    variant={variant}
                    onChange={onChange}
                    name={fieldsId.driverPhoneNumber}
                    value={formState[fieldsId.driverPhoneNumber] || ""}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <CorporateFare
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    label="Organization Name"
                    variant={variant}
                    onChange={onChange}
                    name={fieldsId.organisationName}
                    value={formState[fieldsId.organisationName] || ""}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AlternateEmail
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    label="Email"
                    variant={variant}
                    onChange={onChange}
                    name={fieldsId.email}
                    value={formState[fieldsId.email] || ""}
                  />
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
                    onChange={onChange}
                    name={fieldsId.vehicleRegistrationNumber}
                    value={formState[fieldsId.vehicleRegistrationNumber] || ""}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <LocalShipping
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    label="Trailer registration Number"
                    variant={variant}
                    onChange={onChange}
                    name={fieldsId.trailerRegistrationNumber}
                    value={formState[fieldsId.trailerRegistrationNumber] || ""}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <CorporateFare
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    label="Arriving Time"
                    variant={variant}
                    onChange={onChange}
                    name={fieldsId.arrivalDate}
                    value={formState[fieldsId.arrivalDate] || ""}
                  />
                  {/*<LocalizationProvider dateAdapter={console.log}>*/}
                  {/*  <DateTimePicker*/}
                  {/*    renderInput={(props) => <TextField {...props} />}*/}
                  {/*    label="DateTimePicker"*/}
                  {/*    value={new Date()}*/}
                  {/*    onChange={(newValue) => {*/}
                  {/*      console.log(newValue);*/}
                  {/*    }}*/}
                  {/*  />*/}
                  {/*</LocalizationProvider>*/}
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AlternateEmail
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    label="Order Notes"
                    variant={variant}
                    onChange={onChange}
                    name={fieldsId.notes}
                    value={formState[fieldsId.notes] || ""}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Typography variant={"h6"}>
                  Order ID: {formState[fieldsId.orderId]}
                </Typography>
                <Button
                  disabled={isLoading}
                  onClick={onSubmit}
                  variant="contained"
                >
                  Submit
                </Button>
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
