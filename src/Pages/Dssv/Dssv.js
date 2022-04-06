import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemSv, Modal, RepailSV } from "../../Components";
import { sinhVienServ } from "../../Shared";
import { actions } from "../../Store";

function Dssv() {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.homeData);
  const fectHomeData = useSelector((state) => state.fectHomeData);
  const showRepair = useSelector((state) => state.showRepair);
  const [loading, setLoading] = useState(true);
  const [mount, setMount] = useState(false);

  const handleAddSv = () => {
    sinhVienServ.addSinhVien().then((res) => {
      dispatch(actions.setFetchHomeData(true));
    });
  };

  useEffect(() => {
    if (fectHomeData) {
      sinhVienServ
        .layDanhSinhVien()
        .then((res) => {
          dispatch(actions.setHomeData(res.data));
          dispatch(actions.setFetchHomeData(false));
        })
        .catch((err) => {
          dispatch(actions.setHomeData([]));
        });
    }
  }, [fectHomeData]);

  useEffect(() => {
    setLoading(true);
    sinhVienServ
      .layDanhSinhVien()
      .then((res) => {
        setLoading(false);
        dispatch(actions.setHomeData(res.data));
        dispatch(actions.setFetchHomeData(false));
      })
      .catch((err) => {
        dispatch(actions.setHomeData([]));
      });
    return () => {
      dispatch(actions.setFetchHomeData(true));
    };
  }, []);

  if (loading) {
    return <h2>Loading.........</h2>;
  }

  return (
    <div
      className=""
      style={{
        padding: `100px 0 100px 0`,
      }}
    >
      <h2 className="text-center fs-1 red fw-bold">Quản Lý Sinh Viên</h2>
      <Modal />
      <div className="p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên</th>

              <th>Email</th>

              <th>Số Điện Thoại</th>

              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {homeData.map((item, index) => {
              return <ItemSv key={index} value={item} />;
            })}
          </tbody>
        </table>
        {showRepair?.show && <RepailSV />}
      </div>
    </div>
  );
}

export default Dssv;
