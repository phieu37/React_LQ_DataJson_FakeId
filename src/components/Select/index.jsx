import './styles.scss';
import { Select } from "antd";
import PropTypes from "prop-types";

function SelectMASQ(props) {
  const {
    onChange = [],
    value,
    options,
    placeholder = 'Please select',
    allowClear = false
  } = props

  return (
    <Select
      allowClear={allowClear}
      placeholder={placeholder}
      className={`select-custom`}
      defaultValue={value}
      onChange={onChange}
      options={options}
    />
  );
}

SelectMASQ.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  allowClear: PropTypes.bool,
};

export default SelectMASQ;
