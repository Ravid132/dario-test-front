import AsyncSelect from 'react-select/async';
import Select from 'react-select';

export const SelectCmp = ({
  handleChange,
  loadOptions,
  value,
  placeholder,
  title,
  load,
  change,
}) => {
  return (
    <div className='select-cmp'>
      <AsyncSelect
        cacheOptions
        defaultOptions
        getOptionLabel={title}
        getOptionValue={value}
        loadOptions={(e) => load(e)}
        placeholder={placeholder}
        onChange={change}
      />
    </div>
  );
};
