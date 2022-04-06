import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { sinhVienServ } from "../../Shared";
import { actions } from "../../Store";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDetailData(null);
    setLoading(true);
    sinhVienServ
      .layChiTietSinhVien(id)
      .then((res) => {
        setDetailData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setDetailData(null);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading...........</h2>;
  }

  const { email, name, phone } = detailData;
  return (
    <div className="container p-5">
      <p>Email: {email}</p>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export default Detail;
