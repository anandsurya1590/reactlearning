import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>This is Router Demo</h1>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/shop"> Shop </Link>
    </>
  );
};

export default Navbar;
