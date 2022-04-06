export const setHomeData = (payload) => {
  return {
    type: "SET_HOME_DATA",
    payload,
  };
};

export const setFetchHomeData = (payload) => {
  return {
    type: "SET_FETCH_HOME_DATA",
    payload,
  };
};

export const setCurrentNav = (payload) => {
  return {
    type: "SET_CURRENT_NAV",
    payload,
  };
};

export const addSV = (payload) => {
  return {
    type: "ADD_SV",
    payload,
  };
};

export const deleteSV = (payload) => {
  return {
    type: "DELETE_SV",
    payload,
  };
};

export const setMessModal = (payload) => {
  return {
    type: "SET_MESS_MODAL",
    payload,
  };
};

export const setMessRepair = (payload) => {
  return {
    type: "SET_MESS_REPAIR",
    payload,
  };
};

export const setShowRepair = (payload) => {
  return {
    type: "SET_SHOW_REPAIR",
    payload,
  };
};

export const handleRepairSV = (payload) => {
  return {
    type: "HANDLE_REPAIR_SV",
    payload,
  };
};

export const setClearModal = (payload) => {
  return {
    type: "SET_CLEAR_MODAL",
    payload,
  };
};
