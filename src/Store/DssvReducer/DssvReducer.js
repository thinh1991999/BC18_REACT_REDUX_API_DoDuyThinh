const initState = {
  homeData: [],
  messModal: {
    type: "",
    msg: "",
  },
  clearModal: false,
  showRepair: {
    show: false,
    id: "",
  },
  infoRepair: {},
  messRepair: {
    type: "",
    msg: "",
  },
  fectHomeData: true,
  currentNav: null,
};

export const DssvReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "SET_HOME_DATA": {
      return {
        ...state,
        homeData: payload,
      };
    }
    case "SET_FETCH_HOME_DATA": {
      return {
        ...state,
        fectHomeData: payload,
      };
    }
    case "SET_CURRENT_NAV": {
      return {
        ...state,
        currentNav: payload,
      };
    }
    case "SET_SHOW_REPAIR": {
      const { id } = payload;
      const index = state.homeData.findIndex((item) => {
        return item.id === id;
      });
      if (id) {
        return {
          ...state,
          showRepair: payload,
          infoRepair: state.homeData[index],
        };
      }
      return {
        ...state,
        showRepair: payload,
      };
    }
    case "SET_MESS_MODAL": {
      return {
        ...state,
        messModal: payload,
      };
    }
    case "SET_MESS_REPAIR": {
      return {
        ...state,
        messRepair: payload,
      };
    }
    case "SET_CLEAR_MODAL": {
      return {
        ...state,
        clearModal: payload,
      };
    }
    case "HANDLE_REPAIR_SV": {
      const id = state.showRepair.id;
      const index = state.homeData.findIndex((item) => {
        return item.id === id;
      });

      const cloneData = [...state.homeData];
      cloneData[index] = payload;
      return {
        ...state,
        homeData: cloneData,
        messRepair: {
          type: "success",
          msg: "Sửa thành công",
        },
      };
    }
    case "DELETE_SV": {
      const cloneData = [...state.homeData];
      const index = cloneData.findIndex((item) => {
        return item.id === payload;
      });
      console.log(index);
      cloneData.splice(index, 1);
      return {
        ...state,
        homeData: cloneData,
      };
    }
    case "ADD_SV": {
      const cloneData = [...state.homeData];
      let valid = true;
      cloneData.forEach((item) => {
        if (item.id === payload.id) {
          valid = false;
        }
      });
      if (!valid) {
        return {
          ...state,
          messModal: {
            type: "danger",
            msg: "ID này đã tồn tại!!",
          },
          clearModal: false,
        };
      }
      cloneData.push(payload);
      return {
        ...state,
        homeData: cloneData,
        messModal: {
          type: "success",
          msg: "Thêm Sinh Viên thành công.",
        },
        clearModal: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
