import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sinhVienServ } from "../../Shared";
import { actions } from "../../Store";

function RepailSV() {
  const dispatch = useDispatch();
  const {
    messRepair: { type, msg },
    infoRepair: { id, name, email, phone },
  } = useSelector((state) => state);
  const [formValue, setFormValue] = useState({
    id,
    name,
    email,
    phone,
  });

  const handleOnChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const clearMessModal = () => {
    dispatch(
      actions.setMessRepair({
        type: "",
        msg: "",
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sinhVienServ.updateSinhVien(id, formValue).then((res) => {
      dispatch(actions.setFetchHomeData(true));
      dispatch(
        actions.setMessRepair({
          type: "success",
          msg: "Sửa thành công!",
        })
      );
    });
  };

  return (
    <div
      className="fixed-top fixed-bottom fixed-right fixed-left"
      style={{
        background: "rgb(67, 65, 65,0.5)",
      }}
    >
      {" "}
      <div
        style={{
          width: "500px",
          background: `white`,
        }}
        className="m-auto mt-5 p-2"
      >
        <div className="d-flex flex-row justify-content-between">
          <h5 className="modal-title" id="staticBackdropLabel">
            Sửa Sinh Viên
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              dispatch(
                actions.setShowRepair({
                  show: false,
                  id: "",
                })
              );
              dispatch(
                actions.setMessRepair({
                  type: "",
                  msg: "",
                })
              );
            }}
          />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Id" className="form-label">
              Id
            </label>
            <input
              type="text"
              className="form-control"
              id="Id"
              name="id"
              aria-describedby="emailHelp"
              onChange={handleOnChange}
              required={true}
              disabled={true}
              value={formValue.id}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="Name"
              onChange={handleOnChange}
              value={formValue.name}
              onFocus={clearMessModal}
              required={true}
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="Email"
              onChange={handleOnChange}
              value={formValue.email}
              onFocus={clearMessModal}
              required={true}
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="sdt" className="form-label">
              Số Điện Thoại
            </label>
            <input
              name="phone"
              className="form-control"
              id="sdt"
              onChange={handleOnChange}
              value={formValue.phone}
              onFocus={clearMessModal}
              required={true}
            />
          </div>
          {msg.length > 0 && (
            <p
              style={{
                color: `${type === "success" ? `blue` : `red`}`,
              }}
            >
              {msg}
            </p>
          )}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                dispatch(
                  actions.setShowRepair({
                    show: false,
                    id: "",
                  })
                );
                dispatch(
                  actions.setMessRepair({
                    type: "",
                    msg: "",
                  })
                );
              }}
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onSubmit={handleSubmit}
            >
              Sửa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RepailSV;
