import React from 'react';
import MonoConnect from '@mono.co/connect.js';
import { Button, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { signinSuccess, authRequest } from '../actions';


const MonoLink = () => {
  const dispatch = useDispatch();
  const { REACT_APP_PUBLIC_KEY } = process.env;
  const { info } = useSelector(state => state.monoConnect);
  const { code } = useSelector(state => state.monoConnect);
  const value = {
    code
  }

  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect(REACT_APP_PUBLIC_KEY, {
      onClose: () => console.log('Widget closed'),
      onLoad: () => console.log('Widget loaded successfully'),
      onSuccess: ({ code }) => {
        dispatch(signinSuccess(code));
        console.log(`Linked successfully: ${code}`)
        localStorage.setItem('code', code);
      }
    })

    monoInstance.setup()
    
    return monoInstance;
  }, [dispatch, REACT_APP_PUBLIC_KEY])

  const handleAuth = () => {
    dispatch(authRequest(value));

    setTimeout(() => {
      message.info(info);
  }, 2000); 
  };

  return (
    <>
      <div className="center_button">
        <Link to="/accounts">
          <Button
            className="account_button"
            size="large"
            shape="round"
            type="primary"
          >
            Go to Accounts
          </Button>
        </Link>
        <div className="auth_buttons">
          <Button
            size="large"
            type="primary"
            shape="round"
            className="mono_button"
            onClick={() => monoConnect.open()}
            >
            Authenticate with Mono
          </Button>
          <Button
            size="large"
            type="primary"
            shape="round"
            onClick={() => handleAuth()}
            >
            Authenticate User Id
          </Button>
        </div>
      </div>
    </>
  )
}

export default withRouter(MonoLink);
