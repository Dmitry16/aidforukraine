import React, { useCallback, useState } from "react";
import moment from "moment";
import {
  Box,
  Button,
  Chip,
  createTheme,
  Divider,
  Grid,
  MenuItem,
  MenuList,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  AccountCircle,
  AirlineSeatReclineNormal,
  AlternateEmail,
  CorporateFare,
  Description,
  LocalShipping,
  Phone,
} from "@mui/icons-material";
import DateTimePicker from "@mui/lab/DateTimePicker";
import BoxForm from "./BoxForm";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { getCodeId } from "./helpers";

const defaultTheme = createTheme({});

const lsIDKey = "drohobych-id";
const lsHistoryKey = "drohobych-history";
const googleFormId = "1FAIpQLSf6Uz-0v73df30PqZ0kPcwkZCLc0GQDLJVbdRrLZx9g3tkwog";
const formUrl = `https://docs.google.com/forms/u/0/d/e/${googleFormId}/formResponse`;

const fieldsId = {
  organisationName: "entry.1120286520",
  contactPerson: "entry.124618937",
  phoneNumber: "entry.2060837920",
  email: "entry.299921223",
  driverName: "entry.1048162980",
  driverPhoneNumber: "entry.604989816",
  departureDate: "entry.",
  arrivalDate: "entry.1678365072",
  arrivalDate2: "entry.1131935088",
  vehicleRegistrationNumber: "entry.1723190947",
  trailerRegistrationNumber: "entry.1504241797",
  boxes: "entry.1889613797",
  notes: "entry.1290381539",
  edit: "entry.705165510",
  orderId: "entry.1959796125",
  userId: "entry.1003640068",
};
const variant = "standard";

let currentUserId = localStorage.getItem(lsIDKey);
if (!currentUserId) {
  currentUserId = getCodeId();
  localStorage.setItem(lsIDKey, currentUserId);
}

const getEmptyFormState = () => ({
  [fieldsId.userId]: currentUserId,
  [fieldsId.orderId]: getCodeId(),
  timeStamp: Date.now(),
});

const formatTime = (ms) => {
  const time = new Date(ms);
  return `${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`;
};

const phoneInputStyle = {
  width: "93%",
  borderRadius: 0,
  borderStyle: "none none solid",
  borderColor: '#999',
  fontSize: '16px',
  fontFamily: 'Helvetica',
}

const InventoryForm = () => {
  const [formState, setFormState] = useState(getEmptyFormState());
  // const [date, setDate] = useState(null);
  // const [phone, setPhone] = useState();
  // const [driverPhone, setDriverPhone] = useState();
  const [boxes, setBoxes] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isValidating, setValidating] = useState(false);
  const ordersHistory = JSON.parse(localStorage.getItem(lsHistoryKey)) || {
    data: [],
  };

  const setPresavedState = useCallback((order) => {
    setFormState(order);
    setBoxes(order.boxes);
  }, []);

  const resetValidating = useCallback(() => setValidating(false), []);

  const resetForm = useCallback(() => {
    setFormState(getEmptyFormState());
    setBoxes([]);
    setValidating(false);
    setLoading(false);
  }, []);

  const onChange = useCallback(
    ({ target: { name, value } }) => {
      resetValidating();
      setFormState((s) => ({ ...s, [name]: value }));
    },
    [resetValidating]
  );

  const onChangePhone = useCallback(
    (labelName) => (value) => {
      resetValidating();
      setFormState((s) => ({ ...s, [labelName]: value }));
    },
    [resetValidating]
  );

  const onChangeDate = useCallback(
    (labelName) => (dateObj) => {
      resetValidating();
      setFormState((s) => ({
        ...s,
        [labelName]: dateObj ? dateObj.valueOf() : "",
      }));
    },
    [resetValidating]
  );

  const sendSMS = () => {
    const driverPhone = formState[fieldsId.driverPhoneNumber];
    const smsData = `${moment(formState[fieldsId.arrivalDate]).format(
      "DD/MM/YYYY HH:mm"
    )},
    ${formState[fieldsId.driverName]},
    ${driverPhone},
    ${formState[fieldsId.vehicleRegistrationNumber]}`;

    const urlSMStoDriver = `https://api2.serwersms.pl/messages/send_sms?username=webapi_ihorsydor&password=Inglot.123&phone=%2B${driverPhone}&sender=Aid4Ukraine&text=Cargo destination: https://goo.gl/maps/7Bf68Bq6xzdDMapN9`;
    const urlSMStoCiec = `https://api2.serwersms.pl/messages/send_sms?username=webapi_ihorsydor&password=Inglot.123&phone=%2B48660511710&text=${smsData}&sender=Aid4Ukraine`;
    const urlSMStoChomik = `https://api2.serwersms.pl/messages/send_sms?username=webapi_ihorsydor&password=Inglot.123&phone=%2B48606889946&text=${smsData}&sender=Aid4Ukraine`;

    fetch(urlSMStoDriver);
    fetch(urlSMStoCiec);
    fetch(urlSMStoChomik);
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setValidating(true);
      sendSMS();

      if (
        Object.values(boxes).length === 0 ||
        // !formState[fieldsId.phoneNumber] ||
        // !formState[fieldsId.email] ||
        Object.values(boxes).some((bx) => !bx.type.length)
      ) {
        console.log("Form ValidationError");
        return;
      }

      setLoading(true);
      const currentOrder = {
        ...formState,
        [fieldsId.arrivalDate]: moment(formState[fieldsId.arrivalDate]).format(
          "DD/MM/YYYY HH:mm"
        ),
        [fieldsId.arrivalDate2]: moment(formState[fieldsId.arrivalDate])
          .add(1, "hours")
          .format("DD/MM/YYYY HH:mm"),
        [fieldsId.boxes]: JSON.stringify({ packs: Object.values(boxes) }),
        [fieldsId.edit]: formState.saved ? formState[fieldsId.orderId] : "",
      };

      delete currentOrder.timeStamp;
      delete currentOrder.saved;
      delete currentOrder.boxes;
      let searchParams = new URLSearchParams(currentOrder);
      fetch(formUrl + "?" + searchParams.toString(), {
        method: "POST",
        mode: "no-cors",
      })
        .then(({ ok }) => {
          // if (ok) {
          const presaved = localStorage.getItem(lsHistoryKey);
          const ordersHistory = presaved ? JSON.parse(presaved) : { data: [] };

          const orderToSave = {
            ...formState,
            boxes,
            saved: true,
          };

          const prevIndex = ordersHistory.data.findIndex(
            (o) => o[fieldsId.orderId] === formState[fieldsId.orderId]
          );

          if (~prevIndex) {
            /* update if we have order stored before */
            ordersHistory.data[prevIndex] = orderToSave;
          } else {
            ordersHistory.data.push(orderToSave);
          }
          localStorage.setItem(lsHistoryKey, JSON.stringify(ordersHistory));
          resetForm();
          //}
        })
        .finally(() => setLoading(false));
    },
    [formState, boxes, resetForm]
  );

  const historyMenuItems = (Wrapper) => (
    <Box
      sx={{
        maxHeight: 385,
        overflowY: "auto",
        flexDirection: { xs: "row", md: "column" },
      }}
    >
      {ordersHistory?.data?.map((pastOrder) => (
        <Wrapper
          sx={{
            fontWeight:
              pastOrder[fieldsId["orderId"]] === formState[fieldsId["orderId"]]
                ? "bold"
                : "normal",
          }}
          key={pastOrder[fieldsId["orderId"]]}
          onClick={() => {
            setPresavedState(pastOrder);
          }}
        >
          {formatTime(pastOrder.timeStamp)} - {pastOrder[fieldsId["orderId"]]}
        </Wrapper>
      ))}
    </Box>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        className={"inventory-form"}
        component="form"
        sx={{
          ml: 2,
          mr: 1,
          width: "80%",
          "& .MuiTextField-root": { m: 1, width: "80%" },
        }}
        onSubmit={onSubmit}
      >
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", md: 200 },
              order: { xs: 1, md: 3 },
            }}
          >
            <MenuList sx={{ display: { xs: "none", md: "block" }, marginTop: '20px' }}>
              <MenuItem sx={{marginBottom: '-5px', padding: 0, color: "#666"}}>Previous orders:</MenuItem>
              <Divider color="darkgrey" sx={{marginTop: 0, padding: 0}} />
              {historyMenuItems(MenuItem)}
            </MenuList>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <MenuItem>Previous orders:</MenuItem>
              {historyMenuItems(({ children, ...p }) => (
                <Chip {...p} label={children} />
              ))}
            </Box>
          </Box>
          <Grid sx={{ order: 2 }} container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  width: "100%",
                }}
              >
                <CorporateFare
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="organisationName"
                  label="Organization Name"
                  variant={variant}
                  onChange={onChange}
                  name={fieldsId.organisationName}
                  value={formState[fieldsId.organisationName] || ""}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="contactPerson"
                  label="Contact Person Name"
                  variant={variant}
                  onChange={onChange}
                  name={fieldsId.contactPerson}
                  value={formState[fieldsId.contactPerson] || ""}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                style={{ paddingTop: "25px" }}
                sx={{ display: "flex", alignItems: "flex-end" }}
              >
                <Phone sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <PhoneInput
                  inputStyle={phoneInputStyle}
                  country="pl"
                  regions={"europe"}
                  name={fieldsId.phoneNumber}
                  placeholder="Organization Phone Number"
                  value={formState[fieldsId.phoneNumber]}
                  onChange={onChangePhone(fieldsId.phoneNumber)}
                  disableCountryCode
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AlternateEmail
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="email"
                  label="Email"
                  variant={variant}
                  onChange={onChange}
                  name={fieldsId.email}
                  value={formState[fieldsId.email] || ""}
                  error={isValidating && !formState[fieldsId.email]}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                style={{ paddingTop: "20px" }}
                sx={{ display: "flex", alignItems: "flex-end" }}
              >
                <Phone sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <PhoneInput
                  inputStyle={phoneInputStyle}
                  country="pl"
                  regions={"europe"}
                  placeholder="Driver Phone Number"
                  name={fieldsId.driverPhoneNumber}
                  value={formState[fieldsId.driverPhoneNumber]}
                  onChange={onChangePhone(fieldsId.driverPhoneNumber)}
                  disableCountryCode
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <CorporateFare
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <LocalizationProvider dateAdapter={DateAdapter}>
                  <DateTimePicker
                    inputFormat="DD-MM-yyyy HH:mm"
                    label="Arriving Time"
                    id="arrivalDate"
                    name={fieldsId.arrivalDate}
                    value={
                      formState[fieldsId.arrivalDate]
                        ? new Date(formState[fieldsId.arrivalDate])
                        : null
                    }
                    onChange={onChangeDate(fieldsId.arrivalDate)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant={variant}
                        label="Arriving Time"
                        id="arrivalDate"
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Description sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  label="Order Notes"
                  variant={variant}
                  onChange={onChange}
                  name={fieldsId.notes}
                  value={formState[fieldsId.notes] || ""}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LocalShipping
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="vehicle"
                  label="Vehicle registration Number"
                  variant={variant}
                  onChange={onChange}
                  name={fieldsId.vehicleRegistrationNumber}
                  value={formState[fieldsId.vehicleRegistrationNumber] || ""}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                {formState.saved && (
                  <>
                    <Typography>{formatTime(formState.timeStamp)}</Typography>
                    <Typography>#{formState[fieldsId.orderId]}</Typography>
                    <Button
                      disabled={isLoading}
                      type={"submit"}
                      onClick={resetForm}
                    >
                      New Order
                    </Button>
                  </>
                )}
                <Button
                  disabled={isLoading}
                  type={"submit"}
                  variant="contained"
                >
                  {formState.saved ? "Update" : "Submit"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <BoxForm
          boxes={boxes}
          setBoxes={setBoxes}
          isValidating={isValidating}
          resetValidating={resetValidating}
        />
      </Box>
    </ThemeProvider>
  );
};

export default InventoryForm;
