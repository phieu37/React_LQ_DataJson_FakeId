import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';
import { setVisibleModalCreateOrUpdate, addDistrict, updateDistrict } from '../../../../states/modules/home'

export default function Handle(props) {
  const { isTypeModalCreate, detailDistrict } = props;
  const dispatch = useDispatch();
  const visibleModalCreateOrUpdate = useSelector(state => state.home.visibleModalCreateOrUpdate);
  const [dataCreateOrUpdate, setDataCreateOrUpdate] = useState({
    DistrictCode: '',
    ProvinceCode: '',
    DistrictName: '',
    FlagActive: 0,
  });

  useEffect(() => {
    if (!isTypeModalCreate && detailDistrict) {
      setDataCreateOrUpdate(detailDistrict);
    } else {
      setDataCreateOrUpdate({
        id: uuidv4(), // Tạo UUID mới cho các mục mới
        DistrictCode: '',
        ProvinceCode: '',
        DistrictName: '',
        FlagActive: 0,
      });
    }
  }, [visibleModalCreateOrUpdate, isTypeModalCreate, detailDistrict]);


  const handleChangeInput = (e, type) => {
    let data = _.cloneDeep(dataCreateOrUpdate);
    data[type] = e.target.value;
    setDataCreateOrUpdate(data)
  }

  const handleChangeSwitch = (isChecked, type) => {
    let data = _.cloneDeep(dataCreateOrUpdate);
    data[type] = isChecked ? 1 : 0
    setDataCreateOrUpdate(data)
  }

  // const handleChangeInput = (e, field) => {
  //   setDataCreateOrUpdate({
  //     ...dataCreateOrUpdate,
  //     [field]: e.target.value,
  //   });
  // };

  // const handleChangeSwitch = (checked, field) => {
  //   setDataCreateOrUpdate({
  //     ...dataCreateOrUpdate,
  //     [field]: checked ? 1 : 0,
  //   });
  // };

  const handleConfirm = () => {
    if (isTypeModalCreate) {
      // console.log('Adding district:', dataCreateOrUpdate);
      dispatch(addDistrict(dataCreateOrUpdate));
    } else {
      // console.log('Updating district:', dataCreateOrUpdate);
      dispatch(updateDistrict(dataCreateOrUpdate));
    }
    dispatch(setVisibleModalCreateOrUpdate(false));
  };

  return {
    handleConfirm,
    handleChangeInput,
    handleChangeSwitch,
    dataCreateOrUpdate,
  }
}

