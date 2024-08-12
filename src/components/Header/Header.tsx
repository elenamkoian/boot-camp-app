import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import HeaderTabs from "./HeaderTabs.tsx";
// import LoginBtn from "./LoginBtn.tsx";

const Header = () => {
  return (
    <div className="bg-white h-16 w-full px-6 flex gap-8 justify-between items-center">
      {/*<div className="flex gap-4 items-center">*/}
        <AccountCircleIcon
          style={{ fill: "#68847c" }}
          sx={{ "&.MuiSvgIcon-root": { fontSize: "48px" } }}
        />
        <HeaderTabs />
      {/*</div>*/}
      {/*<LoginBtn />*/}
    </div>
  );
};

export default Header;
