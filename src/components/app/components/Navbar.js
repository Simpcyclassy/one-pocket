import { Button, Layout, Menu } from "antd";
import React from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { statementRequest } from '../../statements/actions';

import { AppLink } from "../../app/components";

const { Header } = Layout;
const { Item } = Menu;

const Navbar = () => {
  let location = useLocation();
  const dispatch = useDispatch();

  const { code } = useSelector(state => state.monoConnect);
  const value = {
    code
  }

  const menuItem = (linkPath, text, clickEvent) => (
    <Item className="header-item" key={text}>
      <Button type="primary" className="header-button" onClick={clickEvent}>
        <AppLink to={linkPath}>{text}</AppLink>
      </Button>
    </Item>
  );

  const handleSubmit = () => {
    dispatch(statementRequest(value));  
  };


  const renderMenuItem = ({pathname}) => {
    if (pathname === "/") {
      return [
        menuItem("/accounts", "Go to Account"),
        menuItem("/verifications", "Go to BVN Verification")
      ]
    }
    if (pathname === "/accounts") {
      return [
        menuItem("/", "Go to Home"),
        menuItem("/statements", "Statements", () => handleSubmit())
      ]
    }
    if (pathname === "/statements") {
      return [
        menuItem("/", "Go to Home"),
        menuItem("/accounts", "Go to Account")
      ]
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
