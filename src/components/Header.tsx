import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { CHANGE_IS_CHANGED } from "../redux/slices/setting changed/SettingChangedSlice";

const Header = () => {
  const location = useLocation();
  const blurBg = useAppSelector((state) => state.blurBg.blur);
  const dispatch = useAppDispatch();

  return (
    <header
      className={
        "w-full flex justify-center mb-8 bg-dark text-dark" +
        " " +
        (blurBg && "blur-sm")
      }
    >
      <div className="w-[1200px] flex flex-col items-center py-3">
        <h1 className="text-3xl font-bold">TYPO-SPEED</h1>
        <Link
          className="text-[18px] hover:underline hover:underline-offset-3"
          to={location.pathname === "/" ? "/settings" : "/"}
        >
          {location.pathname === "/" ? "settings" : "home"}
        </Link>
      </div>
    </header>
  );
};

export default Header;
