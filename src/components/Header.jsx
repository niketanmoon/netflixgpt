import { useEffect } from "react";
import Logo from "../assets/NetflixLogo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: USER_AVATAR,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubsribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
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
