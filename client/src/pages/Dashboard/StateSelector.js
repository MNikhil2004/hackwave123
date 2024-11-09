import React from 'react';
  // Importing the CSS file for styling
  import '../../styles/StateSelector.css'
const StateSelector = ({ onSelectState }) => {
    const states = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
        'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
        'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
        'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi'
    ];

    return (
        <div className="state-selector-container">
            <label htmlFor="state" className="state-label">Select a State</label>
            <select id="state" onChange={(e) => onSelectState(e.target.value)} className="state-select">
                <option value="">Select a State</option>
                {states.map((state) => (
                    <option key={state} value={state}>
                        {state}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StateSelector;