import { Button, Layout, Menu } from "antd";
import React from "react";
import { useLocation } from 'react-router-dom';
import { AppLink } from "../../app/components";

const { Header } = Layout;
const { Item } = Menu;

const Navbar = () => {
  let location = useLocation();
  const menuItem = (linkPath, text) => (
    <Item className="header-item" key={text}>
      <Button type="primary" className="header-button">
        <AppLink to={linkPath}>{text}</AppLink>
      </Button>
    </Item>
  );

  const renderMenuItem = ({pathname}) => {
    if (pathname === "/") {
      return (
        menuItem("/accounts", "Go to Account")
      )
    }
    if (pathname === "/accounts") {
      return (
        menuItem("/", "Go to Home")
      )
    }
  };

  return (
    <Header className="main-nav">
      <Menu className="right-nav" mode="horizontal">
        {renderMenuItem(location)}
      </Menu>
    </Header>
  );
};

export default Navbar;
