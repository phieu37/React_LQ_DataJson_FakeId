// import React from 'react';
import { Button, Input, Switch } from "antd";
import Handle from "./handle.js";

export default function CreateOrUpdate(props) {
  const { isTypeModalCreate, closeModal } = props;
  const {
    handleConfirm, dataCreateOrUpdate, handleChangeInput, handleChangeSwitch
  } = Handle(props);

  return (
    <div>
      <div>
        <div className={`input-wrap`}>
          <div className={'label-wrap'}>
            Mã Quận/Huyện <span className={'required'}>*</span>
          </div>
          <Input
            className={`main-input`}
            placeholder={'Nhập mã Quận/Huyện'}
            value={dataCreateOrUpdate.DistrictCode}
            onChange={(e) => handleChangeInput(e, 'DistrictCode')}
          />
        </div>

        <div className={`input-wrap`}>
          <div className={'label-wrap'}>
            Mã tỉnh/TP <span className={'required'}>*</span>
          </div>
          <Input
            className={`main-input`}
            placeholder={'Nhập mã tỉnh/TP'}
            value={dataCreateOrUpdate.ProvinceCode}
            onChange={(e) => handleChangeInput(e, 'ProvinceCode')}
          />
        </div>

        <div className={`input-wrap`}>
          <div className={'label-wrap'}>
            Tên quận/huyện
          </div>
          <Input
            className={`main-input`}
            placeholder={'Nhập tên quận/huyện'}
            value={dataCreateOrUpdate.DistrictName}
            onChange={(e) => handleChangeInput(e, 'DistrictName')}
          />
        </div>

        <div className={`input-wrap !mb-[15px]`}>
          <div className={'label-wrap'}>
            Trạng thái <span className={'required'}>*</span>
          </div>
          <Switch
            className={`main-switch`}
            checked={dataCreateOrUpdate.FlagActive}
            onChange={(e) => handleChangeSwitch(e, 'FlagActive')}
          />
        </div>
      </div>

      <div className={`flex justify-center`}>
        <Button
          className={`main-btn-close mr-[10px]`}
          size={'large'}
          onClick={() => closeModal()}
        >Đóng
        </Button>
        <Button
          className={`main-btn-primary`}
          type={'primary'}
          size={'large'}
          onClick={() => handleConfirm()}
        >
          {isTypeModalCreate ? 'Tạo mới' : 'Cập nhật'}
        </Button>
      </div>
    </div>
  )
}
