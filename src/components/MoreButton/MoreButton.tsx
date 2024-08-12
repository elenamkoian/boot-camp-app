import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MoreButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleMenuItemClick = (href: string) => {
    navigate(href);
    handleClose();
  };

  const NAV_BAR_ITEMS = [
    { title: "Home", href: "/" },
    { title: "Contact", href: "/contact" },
    { title: "About", href: "/about" },
    { title: "Login", href: "/login" },
  ];

  return (
    <div>
      <Button
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          border: "1px solid #68847c",
          borderRadius: 4,
          minWidth: 0,
        }}
      >
        <MoreVertIcon sx={{ "&.MuiSvgIcon-root": { color: "#68847c" } }} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {
          NAV_BAR_ITEMS.map((item) => {
            return (
              <MenuItem
                key={item.title}
                onClick={() => handleMenuItemClick(item.href)}
                sx={{ textTransform: 'none', color: "#68847c" }}
              >
                {item.title}
              </MenuItem>
            );
          })
        }
      </Menu>
    </div>
  );
}

export default MoreButton;
