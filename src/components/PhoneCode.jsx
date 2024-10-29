import React, { useState } from "react";
import Select from "react-select";
import dial from "../utils/Dail.json"; 
const PhoneCode = ({handleChange}) => {
  const options = dial.dial.map((item) => ({
    value: item.dial_code,
    label: item.dial_code,
  }));
  const [selectedOption, setSelectedOption] = useState(+93);
  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    handleChange('code',selectedOption.value);
  };

  return (
    <div>
      <Select
        isSearchable
        options={options}
        value={selectedOption}
        onChange={(selectedOption) => handleSelectChange(selectedOption)}
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: "#f3f3f3",
            padding: "7px 0px",
            border: "none",
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: "#f3f3f3",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#f3f3f3" : "#f3f3f3",
            color: state.isSelected ? "black" : "grey",
          }),
        }}
      />

      {/* <select name="code" id="code">
        {dial.dial.map((item) => (
          <option value="item.dial_code">{item.dial_code}</option>
        ))}
      </select> */}
    </div>
  );
};

export default PhoneCode;
