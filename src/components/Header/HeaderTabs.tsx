import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const NAV_BAR_ITEMS = [
  { title: "Home", href: "/" },
  { title: "Contact", href: "/contact" },
  { title: "About", href: "/about" },
  // { title: "Login", href: "/login" },
];

const HeaderTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          height: "36px",
          borderRadius: "24px",
          border: "1px solid #68847c",
          overflow: "hidden",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{ minHeight: "36px", width: "100%" }}
        >
          {
            NAV_BAR_ITEMS.map(({ title, href }, ind) => (
              <Tab
                key={ind}
                label={title}
                component={Link}
                to={href}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "#68847c",
                    color: "white",
                  },
                  height: "100%",
                  color: "#68847c",
                  textTransform: "none",
                  ...(ind === 0 && {
                    borderTopLeftRadius: "22px",
                    borderBottomLeftRadius: "22px",
                  }),
                  ...(ind === NAV_BAR_ITEMS.length - 1 && {
                    borderTopRightRadius: "22px",
                    borderBottomRightRadius: "22px",
                  }),
                }}
              />
            ))
          }
        </Tabs>
      </Box>

      <MuiLink
        href="/login"
        underline="none"
        sx={{ color: "white", backgroundColor: "#68847c", borderRadius: 2, paddingX: 2, paddingY: 0.5  }}
      >
        Login
      </MuiLink>
      {/*<button className="text-white bg-[#68847c] px-6 py-1 rounded-md hover:bg-[#5F9EA0]">*/}
      {/*  Login*/}
      {/*</button>*/}
    </Box>
  );
};

export default HeaderTabs;
