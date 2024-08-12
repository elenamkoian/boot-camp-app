import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HeaderTabs from "./HeaderTabs.tsx";
import MoreButton from "../MoreButton/MoreButton.tsx";

const Header = () => {
  return (
    <div className="absolute z-10 bg-white h-16 w-full px-6 flex gap-8 justify-between items-center">
      <AccountCircleIcon
        style={{ fill: "#68847c" }}
        sx={{ "&.MuiSvgIcon-root": { fontSize: "48px" } }}
      />
      <div className="flex items-center justify-between w-full laptop:flex mobile:hidden">
        {/*display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%">*/}
        <HeaderTabs />
      </div>
      {/*<div className="flex items-center cursor-pointer lg:hidden">*/}
      {/*  <HamburgerSelect />*/}
      {/*</div>*/}
      <div className="items-center cursor-pointer mobile:flex laptop:hidden">
        <MoreButton />
      </div>
    </div>
  );
};

export default Header;
