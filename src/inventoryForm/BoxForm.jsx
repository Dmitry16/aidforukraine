import React, { useCallback } from "react";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { AddCircle, HighlightOff } from "@mui/icons-material";
import { getCodeId } from "./helpers";

const boxStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  width: 200,
  height: 250,
  backgroundColor: "#eee",
  padding: "7px 0",
  margin: 10,
};
const boxTypes = [
  "medicine",
  "hygiene",
  "food",
  "pets",
  "pampers",
  "clothes",
  "military",
  "shoes",
  "other",
];
const BoxForm = ({ boxes, setBoxes }) => {
  const onAddBox = useCallback(() => {
    const newBoxId = getCodeId();
    setBoxes((bxs) => ({
      ...bxs,
      [newBoxId]: {
        boxId: newBoxId,
        amount: 1,
        weight: 5,
      },
    }));
  }, []);
  const onChange = useCallback(({ target: { name, value } }, boxId) => {
    console.log(value);
    if (
      !value?.length ||
      value.length <= 2 ||
      value > 0 ||
      typeof value === "string"
    ) {
      setBoxes((bxs) => ({
        ...bxs,
        [boxId]: { ...bxs[boxId], [name]: value },
      }));
    }
  }, []);

  const onDelete = useCallback(
    (id) =>
      setBoxes((bx) => {
        const newBoxes = { ...bx };
        delete newBoxes[id];
        return newBoxes;
      }),
    []
  );

  return (
    <Box
      sx={{
        mt: 1,
        display: "flex",
        flexWrap: "wrap",
        "& .MuiSelect-select": {
          maxHeight: "70px",
          padding: "8.5px 5px !important",
        },
      }}
    >
      {Object.values(boxes).map(({ boxId }, i) => (
        <Paper elevation={5} key={boxId} style={boxStyles}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              // color: "#aaa",
              alignItems: "center",
              padding: "0 0.5rem",
              boxSizing: "border-box",
            }}
          >
            <Typography variant={"h6"}>{boxId}</Typography>
            <HighlightOff
              onClick={() => onDelete(boxId)}
              sx={{ color: "#aaa", cursor: "pointer" }}
            />
          </Box>
          <div
            style={{ padding: "8px", boxSizing: "border-box", width: "100%" }}
          >
            <FormControl fullWidth size={"small"}>
              <InputLabel>Content</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={boxes[boxId].type || []}
                input={
                  <OutlinedInput id="select-multiple-chip" label="Content" />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip
                        size={"small"}
                        key={value}
                        label={value.toUpperCase()}
                      />
                    ))}
                  </Box>
                )}
                multiple
                name={"type"}
                onChange={(e) => onChange(e, boxId)}
                placeholder={"Type"}
              >
                {" "}
                {boxTypes.map((tp) => (
                  <MenuItem key={tp} value={tp}>
                    {tp.toUpperCase()}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <TextField
            size={"small"}
            onChange={(e) => onChange(e, boxId)}
            name={"amount"}
            value={boxes[boxId].amount}
            label="Amount"
            type={"number"}
            variant="outlined"
          />
          <TextField
            size={"small"}
            onChange={(e) => onChange(e, boxId)}
            name={"weight"}
            value={boxes[boxId].weight}
            label="Weight, kg"
            variant="outlined"
            type={"number"}
          />
          <TextField
            size={"small"}
            onChange={(e) => onChange(e, boxId)}
            name={"notes"}
            value={boxes[boxId].notes}
            label="Notes"
            variant="outlined"
          />
        </Paper>
      ))}
      <Paper
        onClick={onAddBox}
        style={{
          ...boxStyles,
          opacity: 0.6,
          cursor: "pointer",
          justifyContent: "center",
        }}
      >
        <span>Add Pack</span>
        <AddCircle sx={{ color: "#aaa" }} mt={1} fontSize={"large"} />
      </Paper>
    </Box>
  );
};

export default BoxForm;
