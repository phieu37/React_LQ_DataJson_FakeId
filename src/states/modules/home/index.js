import { createSlice } from '@reduxjs/toolkit';
import initialDataDistrict from '../../../Data/Mst_District.json';
import initialDataProvince from '../../../Data/Mst_Province.json';
import { v4 as uuidv4 } from 'uuid';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    dataDistrict: initialDataDistrict.map(district => ({
      ...district,
      id: uuidv4(), // Generate a unique ID for each district
    })),
    originalDataDistrict: initialDataDistrict.map(district => ({
      ...district,
      id: uuidv4(), // Generate a unique ID for each district
    })),
    dataProvince: initialDataProvince,
    visibleModalCreateOrUpdate: false,
    detailDistrict: {},
    isTypeModalCreate: true,
    selectedRows: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
  },
  reducers: {
    setVisibleModalCreateOrUpdate: (state, action) => {
      state.visibleModalCreateOrUpdate = action.payload;
    },
    addDistrict: (state, action) => {
      const newDistrict = {
        ...action.payload,
        id: uuidv4(), // Generate a new unique ID for the new district
      };
      state.dataDistrict.unshift(newDistrict);
      state.originalDataDistrict.unshift(newDistrict);
    },
    updateDistrict: (state, action) => {
      const index = state.dataDistrict.findIndex(
        district => district.id === action.payload.id
      );
      if (index !== -1) {
        state.dataDistrict[index] = action.payload;
        const originalIndex = state.originalDataDistrict.findIndex(
          district => district.id === action.payload.id
        );
        if (originalIndex !== -1) {
          state.originalDataDistrict[originalIndex] = action.payload;
        }
      }
    },
    deleteDistrict: (state) => {
      state.dataDistrict = state.dataDistrict.filter(
        district => !state.selectedRows.includes(district.id)
      );
      state.originalDataDistrict = state.originalDataDistrict.filter(
        district => !state.selectedRows.includes(district.id)
      );
      state.selectedRows = [];
    },
    setDetailDistrict: (state, action) => {
      state.detailDistrict = action.payload;
    },
    setIsTypeModalCreate: (state, action) => {
      state.isTypeModalCreate = action.payload;
    },
    setSelectedRows: (state, action) => {
      state.selectedRows = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
    setFilteredDataDistrict: (state, action) => {
      state.dataDistrict = action.payload;
    },
    resetDataDistrict: (state) => {
      state.dataDistrict = [...state.originalDataDistrict];
    },
  },
});

export const {
  setVisibleModalCreateOrUpdate, addDistrict, updateDistrict, deleteDistrict,
  setDetailDistrict, setIsTypeModalCreate, setSelectedRows, setPagination,
  setFilteredDataDistrict, resetDataDistrict
} = homeSlice.actions;

export default homeSlice.reducer;
