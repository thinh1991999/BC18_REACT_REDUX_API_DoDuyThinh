import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sinhVienServ } from "../../Shared";
import { actions } from "../../Store";

function ItemSv({ value }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email, id, phone } = value;

  const [deleting, setDeleting] = useState(false);

  const handleDeleteSV = () => {
    setDeleting(true);
    sinhVienServ.delteteSinhVien(id).then((res) => {
      dispatch(actions.setFetchHomeData(true));
    });
  };

  const handleToDetail = () => {
    !deleting && navigate(`/detail/${id}`);
  };

  const handleShowRepair = () => {
    dispatch(
      actions.setShowRepair({
        show: true,
        id,
      })
    );
  };

  return (
    <tr
      style={{
        opacity: `${deleting ? 0.5 : 1}`,
      }}
    >
      <th className="fw-normal">{id}</th>
      <th className="fw-normal">{name}</th>

      <th className="fw-normal">{email}</th>

      <th className="fw-normal">{phone}</th>

      <th>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleShowRepair}
        >
          Sửa
        </button>
        <button
          type="button"
          className="btn btn-danger ms-2"
          onClick={handleDeleteSV}
        >
          Xóa
        </button>
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={handleToDetail}
        >
          Xem chi tiết
        </button>
      </th>
    </tr>
  );
}

export default ItemSv;
