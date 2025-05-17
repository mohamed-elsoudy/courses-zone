import Select from 'react-select';

const customStyles = {
  control: (base) => ({
    ...base,
    boxShadow: 'none',
    fontSize: '16px',
    color: '#000',
    fontWeight: '600',
    border: 'none'
  }),
  option: (base) => ({
    ...base,
    backgroundColor: 'white',
    color: '#000',
    fontWeight: '600',
    padding: '5px',
    textAlign: 'center',
  }),
};

function CustomDropdown({ options, placeholder, isRtl = true, onChange }) {
  return (
    <div style={{ width: 'auto', margin: 'auto' }}>
      <Select
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        isRtl={isRtl}
        onChange={onChange}
        components={{ IndicatorSeparator: () => null }}
      />
    </div>
  );
}

export default CustomDropdown;

