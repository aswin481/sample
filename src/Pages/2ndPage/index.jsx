
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function SecondPage() {
  const navigate = useNavigate();
  const [option2, setOption2] = useState('');

  const handleNext = () => {
    navigate(`/main?option2=${option2}`);
  };

  const handleChangeOption2 = (event) => {
    setOption2(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Option 2</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option2}
          onChange={handleChangeOption2}
        >
          <MenuItem value="Option X">Option X</MenuItem>
          <MenuItem value="Option Y">Option Y</MenuItem>
          <MenuItem value="Option Z">Option Z</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleNext}>Next</Button>
    </div>
  );
}

export default SecondPage;
