
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";

function FirstPage() {
  const navigate = useNavigate();
  const [option1, setOption1] = useState("");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ name: "", age: "" });

  const handleNext = () => {
    navigate(`/main?option1=${option1}`);
  };

  const handleChangeOption1 = (event) => {
    setOption1(event.target.value);
    setOpen(event.target.value === "Yes");
  };

  const handleData = (event, key) => {
    setData({ ...data, [key]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="textfield mb-8">
        <InputLabel id="demo-simple-select-label " >Name</InputLabel>
        <TextField fullWidth onChange={(event) => handleData(event, "name")} />
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <TextField
          fullWidth
          type="number"
          onChange={(event) => handleData(event, "age")}
        />
        <InputLabel id="demo-simple-select-label">Address</InputLabel>
        <TextField fullWidth />
      </div>
      <div className="car-dropdown">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
           Do you want to buy a car?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={option1}
            onChange={handleChangeOption1}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Car Details</DialogTitle>
        <DialogContent>
          <TextField
            value={data.name}
            autoFocus
            required
            margin="dense"
            id="user-name"
            name="User Name"
            label="User Name"
            type="name"
            fullWidth
            variant="standard"
            
          />
          <TextField
            value={data.age}
            autoFocus
            required
            margin="dense"
            id="user-age"
            name="User Age"
            label="User Age"
            type="number"
            fullWidth
            variant="standard"
            
          />
           <TextField
           
            autoFocus
            required
            margin="dense"
            id="car-name"
            name="Car Name"
            label="Car Name"
            type="string"
            fullWidth
            variant="standard"
            
          />
          {/* Add more fields as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleNext}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FirstPage;
