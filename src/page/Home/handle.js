import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "antd";
// import _ from "lodash";
import {
  setVisibleModalCreateOrUpdate, deleteDistrict,
  setDetailDistrict, setIsTypeModalCreate, setSelectedRows,
  setPagination,
  setFilteredDataDistrict,
  resetDataDistrict
} from '../../states/modules/home';

export default function Handle() {
  const dispatch = useDispatch();
  const dataDistrict = useSelector(state => state.home.dataDistrict);
  const dataProvince = useSelector(state => state.home.dataProvince);
  const selectedRows = useSelector(state => state.home.selectedRows);
  const isTypeModalCreate = useSelector(state => state.home.isTypeModalCreate);
  const detailDistrict = useSelector(state => state.home.detailDistrict);
  const visibleModalCreateOrUpdate = useSelector(state => state.home.visibleModalCreateOrUpdate);
  const pagination = useSelector(state => state.home.pagination);

  const handleTableChange = (pagination) => {
    dispatch(setPagination(pagination));
  };

  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => ((pagination.current - 1) * pagination.pageSize) + index + 1,
    },
    {
      title: 'Mã Quận/Huyện',
      dataIndex: 'DistrictCode',
      key: 'DistrictCode'
    },
    {
      title: 'Mã tỉnh/TP',
      dataIndex: 'ProvinceCode',
      key: 'ProvinceCode'
    },
    {
      title: 'Tên quận/huyện',
      dataIndex: 'DistrictName',
      key: 'DistrictName'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'FlagActive',
      key: 'FlagActive'
    },
    {
      title: 'Select',
      dataIndex: 'select',
      key: 'select',
      render: (text, record) => (
        <Checkbox
        checked={selectedRows.includes(record.id)}
        onChange={() => handleCheckboxChange(record.id)}
        />
      ),
    },
  ];

  const optionsProvinc = dataProvince.map(item => ({
    value: item.ProvinceCode,
    label: item.ProvinceName
  }));

  const optionsDistrict = dataDistrict.map(item => ({
    value: item.DistrictCode,
    label: item.DistrictName
  }));

  const handleDelete = () => {
    dispatch(deleteDistrict());
  };

  const handleCheckboxChange = (id) => {
    const newSelected = selectedRows.includes(id)
      ? selectedRows.filter(key => key !== id)
      : [...selectedRows, id];
  
    if (newSelected.includes(id)) {
      dispatch(setDetailDistrict(dataDistrict.find(district => district.id === id)));
    } else {
      dispatch(setDetailDistrict({}));
    }
  
    dispatch(setSelectedRows(newSelected));
  };

  const handleToggleVisibleModalCreateOrUpdate = () => {
    dispatch(setVisibleModalCreateOrUpdate(!visibleModalCreateOrUpdate));
  }

  const openModalCreate = () => {
    dispatch(setIsTypeModalCreate(true));
    handleToggleVisibleModalCreateOrUpdate();
  }

  const openModalEdit = () => {
    if (selectedRows.length === 1) {
      dispatch(setIsTypeModalCreate(false));
      handleToggleVisibleModalCreateOrUpdate();
    } else {
      alert("Vui lòng chọn một phần tử để sửa");
    }
  }

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const handleSearch = (value) => {
    if (value.trim() === "") {
      dispatch(resetDataDistrict());
    } else {
      const filteredData = dataDistrict.filter(item => 
        item.DistrictCode.includes(value) || item.DistrictName.includes(value)
      );
      dispatch(setFilteredDataDistrict(filteredData));
    }
  };

  return {
    dataDistrict, columns, handleDelete, handleChange, handleSearch,
    optionsProvinc, optionsDistrict, isTypeModalCreate,
    openModalCreate, openModalEdit,
    detailDistrict, handleToggleVisibleModalCreateOrUpdate,
    visibleModalCreateOrUpdate,
    handleTableChange, pagination
  }
}
