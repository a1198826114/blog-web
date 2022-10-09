import * as React from "react";
import { AppBar, Avatar, Button, Popover } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import DraftsIcon from "@mui/icons-material/Drafts";
import DnsIcon from "@mui/icons-material/Dns";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.less";
const menus = [
  {
    name: "首页",
    router: "index",
    icon: <HomeIcon />,
  },
  {
    name: "文章",
    router: "articles",
    icon: <NoteAddIcon />,
  },
  {
    name: "归档",
    router: "archives",
    icon: <DraftsIcon />,
  },
  {
    name: "分类",
    router: "categories",
    icon: <DnsIcon />,
  },
  {
    name: "标签",
    router: "tags",
    icon: <LoyaltyIcon />,
  },
  {
    name: "关于",
    router: "about",
    icon: <PermIdentityIcon />,
  },
];
const themeColor = createTheme({
  palette: {
    primary: {
      main: "#00e676",
    },
    secondary: {
      main: "#fff"
    },
  },
});
function Header(props) {
  const [theme, setTheme] = React.useState(false);
  const [openUser, setOpenUser] = React.useState(false);
  return (
    <div className="header">
      <AppBar position="static" className="appbar" sx={{background:props.background}}>
        <div className="appbar-left">
          {/* <Avatar>
            <HomeIcon />
          </Avatar> */}
          <span>NeverGiveUp</span>
        </div>
        <div className="appbar-right">
          {menus.map((item, index) => (
            <ThemeProvider theme={themeColor}>
              <Button
                key={item.name}
                className="appbar-right-btn"
                startIcon={item.icon}
                color={index === props.lightIndex ? "primary" : 'secondary'}
              >
                {item.name}
              </Button>
            </ThemeProvider>
          ))}

          <Button
            className="appbar-right-btn theme"
            startIcon={<ColorLensIcon />}
            onClick={() => setTheme(!theme)}
          >
            {theme && (
              <ul className="appbar-right-list">
                <li>
                  <Button
                    className="appbar-right-listbtn"
                    startIcon={<ColorLensIcon />}
                  ></Button>
                </li>
                <li>
                  <Button
                    className="appbar-right-listbtn"
                    startIcon={<ColorLensIcon />}
                  ></Button>
                </li>
              </ul>
            )}
          </Button>
          <Button
            className="appbar-right-btn theme"
            endIcon={<ExpandMoreIcon />}
            onClick={() => setOpenUser(!openUser)}
          >
            <div className="appbar-right-text">好好学习</div>
            {openUser && (
              <ul className="appbar-right-list">
                <li>
                  <Button
                    className="appbar-right-listbtn"
                    startIcon={<ColorLensIcon />}
                  ></Button>
                </li>
                <li>
                  <Button
                    className="appbar-right-listbtn"
                    startIcon={<ColorLensIcon />}
                  ></Button>
                </li>
              </ul>
            )}
          </Button>
        </div>
      </AppBar>
    </div>
  );
}
Header.defaultProps = {
  lightIndex: 0,
};

Header.propTypes = {
  background: PropTypes.string,
  lightIndex: PropTypes.number,
};
export default Header;
