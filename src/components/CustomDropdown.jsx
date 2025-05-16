import Select from 'react-select';

const options = [
  { value: 'ar', label: 'العربيه' },
  { value: 'en', label: 'English' },
];

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

function CustomDropdown() {
  return (
    <div style={{ width: 'auto', margin: 'auto' }}>
      <Select
        options={options}
        styles={customStyles}
        placeholder="اللغه"
        isRtl
        components={{ IndicatorSeparator: () => null }}
      />
    </div>
  );
}

export default CustomDropdown;

