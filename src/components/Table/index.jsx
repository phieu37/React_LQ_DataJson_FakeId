// import { Table } from 'antd';
// import PropTypes from "prop-types";

// function TableMASQ(props) {
//   const { 
//     columns, 
//     dataSource,
//     rowKey,
//   } = props

//   return (
//     <Table
//       columns={columns ? columns : []}
//       dataSource={dataSource ? dataSource : []}
//       rowKey={rowKey || 'id'}
//     />
//   )
// }

// TableMASQ.propTypes = {
//   columns: PropTypes.array.isRequired,
//   dataSource: PropTypes.array.isRequired,
//   rowKey: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.func
//   ])
// }

// export default TableMASQ;

import { Table } from 'antd';

function TableMASQ({ columns, dataSource, rowKey, onChange, pagination }) {
  return (
    <Table
      columns={columns || []}
      dataSource={dataSource || []}
      rowKey={rowKey || 'id'}
      onChange={onChange}
      pagination={pagination}
    />
  );
}

export default TableMASQ;
