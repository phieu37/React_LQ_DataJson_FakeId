import { Checkbox } from "antd";
import SelectMASQ from "../../components/Select";
import TableMASQ from "../../components/Table";
import styles from "./styles.module.scss";
import SearchMASQ from "../../components/Search";
import ButtonMASQ from "../../components/Button";
import Handle from "./handle";
import ModalMASQ from "../../components/Modal";
import CreateOrUpdate from "./components/CreateOrUpdate";

export default function App() {
  const {
    dataDistrict,columns, handleDelete, handleChange, handleSearch,
    openModalCreate, openModalEdit,
    optionsProvinc, optionsDistrict, isTypeModalCreate,
    detailDistrict, handleToggleVisibleModalCreateOrUpdate,
    visibleModalCreateOrUpdate, 
    handleTableChange, pagination,
  } = Handle();

  return (
    <div>
      <div className={styles.wrapperFormTop}>
        <div className={styles.wrapperForm}>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Tỉnh/TP</div>
            <SelectMASQ
              placeholder='Chọn Tỉnh/TP'
              allowClear={true}
              onChange={handleChange}
              options={optionsProvinc}
            />
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Quận/Huyện</div>
            <SelectMASQ
              placeholder='Chọn Quận/Huyện'
              allowClear={true}
              onChange={handleChange}
              options={optionsDistrict}
            />
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Trạng thái</div>
            <Checkbox></Checkbox>
          </div>
        </div>
        <SearchMASQ
          placeholder="Mã Quận/Huyện hoặc tên"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
        />
      </div>

      <div className={styles.wapperButton}>
        <ButtonMASQ
          type="default"
          onClick={openModalCreate}
          style={{ width: 100, height: 50 }}
        >
          Thêm
        </ButtonMASQ>
        <ButtonMASQ
          type="default"
          onClick={openModalEdit}
          style={{ width: 100, height: 50, color: 'blue' }}
        >
          Sửa
        </ButtonMASQ>
        <ButtonMASQ
          type="default"
          onClick={handleDelete}
          style={{ width: 100, height: 50, color: 'red' }}
        >
          Xóa
        </ButtonMASQ>
      </div>

      <TableMASQ
        columns={columns}
        dataSource={dataDistrict}
        pagination={pagination}
        onChange={handleTableChange}
        // rowKey="index"
        rowKey="id"
      />

      <ModalMASQ
        isModalOpen={visibleModalCreateOrUpdate}
        handleOk={() => handleToggleVisibleModalCreateOrUpdate()}
        handleCancel={() => handleToggleVisibleModalCreateOrUpdate()}
        title={isTypeModalCreate ? 'Tạo mới' : 'Cập nhật'}
      >
        <CreateOrUpdate
          detailDistrict={detailDistrict}
          isTypeModalCreate={isTypeModalCreate}
          closeModal={() => handleToggleVisibleModalCreateOrUpdate()}
        />
      </ModalMASQ>
    </div>
  )
}
