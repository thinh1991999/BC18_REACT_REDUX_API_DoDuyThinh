import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemSv, Modal, RepailSV } from "../../Components";
import { sinhVienServ } from "../../Shared";
import { actions } from "../../Store";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setCurrentNav(0));
  }, []);

  return (
    <div
      className=""
      style={{
        padding: `100px 0 100px 0`,
      }}
    >
      <h2>Home</h2>
    </div>
  );
}

export default Home;
