import React from 'react';
import MonoConnect from '@mono.co/connect.js';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { signinSuccess } from '../actions';


const MonoLink = ({history}) => {
  const dispatch = useDispatch();
  const { REACT_APP_PUBLIC_KEY } = process.env;

  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect(REACT_APP_PUBLIC_KEY, {
      onClose: () => console.log('Widget closed'),
      onLoad: () => console.log('Widget loaded successfully'),
      onSuccess: ({ code }) => {
        dispatch(signinSuccess(code));
        console.log(`Linked successfully: ${code}`)
        localStorage.setItem('code', code);
        setTimeout(() => {
          history.push('/accounts');
      }, 2000);
      }
    })

    monoInstance.setup()
    
    return monoInstance;
  }, [dispatch, history, REACT_APP_PUBLIC_KEY])

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

        <Button
          className="mono_button"
          size="large"
          type="primary"
          shape="round"
          onClick={() => monoConnect.open()}
          >
          Authenticate with Mono
        </Button>
      </div>
    </>
  )
}

export default withRouter(MonoLink);
