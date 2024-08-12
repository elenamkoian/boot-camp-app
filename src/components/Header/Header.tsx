import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HeaderTabs from "./HeaderTabs.tsx";

const Header = () => {
  return (
    <div className="absolute z-10 bg-white h-16 w-full px-6 flex gap-8 justify-between items-center">
      <AccountCircleIcon
        style={{ fill: "#68847c" }}
        sx={{ "&.MuiSvgIcon-root": { fontSize: "48px" } }}
      />
      <HeaderTabs />
    </div>
  );
};

export default Header;
