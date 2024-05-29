import { Input, Space } from 'antd';
const { Search } = Input;
import PropTypes from "prop-types";

function SearchMASQ(props) {
  const { placeholder, allowClear, enterButton, size, onSearch } = props
  return (
    <Space direction="vertical">
      <Search
        placeholder={placeholder}
        allowClear={allowClear}
        enterButton={enterButton}
        size={size}
        onSearch={onSearch}
      />
    </Space>
  );
}

SearchMASQ.propTypes = {
  placeholder: PropTypes.string,
  allowClear: PropTypes.bool,
  enterButton: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  onSearch: PropTypes.func,
};

export default SearchMASQ;
