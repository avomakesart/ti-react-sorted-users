import React, { ChangeEventHandler } from 'react';
import './select-input.css';

interface SelectInputProps {
  label?: string;
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  data: any;
  selectedValue: any;
  defaultValue: string;
  name: string;
  required?: boolean;
  error?: any;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  defaultValue,
  label,
  handleChange,
  data,
  selectedValue,
  name,
  required,
  error,
}) => {
  return (
    <div className='selectInputContainer'>
      <label id='listbox-label' className='selectInputLabel'>
        {label} {required && <span className='required'>*</span>}
      </label>
      <div className='selectInputWrapper'>
        <select
          name={name}
          value={selectedValue}
          onChange={handleChange}
          className={`${error ? 'selectInputError' : ''} selectInput`}
        >
          <option value={defaultValue}>{defaultValue}</option>
          {data?.map((value: any) => (
            <option className='selectInputOption' key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <p className='errorText'>{error ? error : null}</p>
      </div>
    </div>
  );
};
