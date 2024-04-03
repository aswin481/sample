import React, { createContext, useState } from 'react';

const SelectedOptionsContext = createContext({
    selectedOption1: '',
    selectedOption2: '',
    setSelectedOption1: () => {},
    setSelectedOption2: () => {},
});

export default SelectedOptionsContext;
