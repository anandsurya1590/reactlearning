import { useHistory, useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Shop = () => {
  const { name, lname } = useParams();
  const loc = useLocation();
  const his = useHistory();
  console.log("Location", loc);
  console.log("History:", his);
  return (
    <>
      <Navbar />
      <h1>
        This is Shop page name is {name} {lname}
      </h1>
    </>
  );
};

export default Shop;
