import React from 'react';

const ToggleContext = React.createContext(null);

const useToggle = () => React.useContext(ToggleContext);

export { ToggleContext,useToggle };