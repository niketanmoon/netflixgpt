import Logo from "../assets/NetflixLogo.png";
import { USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-44" src={Logo} alt="Netflix Logo" />
      {user && (
        <div className="flex p-2 items-center space-x-3">
          <img className="w-12 h-12" src={user?.photoUrl} alt="userIcon" />
          <button
            className="p-2 text-white bg-red-500 rounded-lg cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
