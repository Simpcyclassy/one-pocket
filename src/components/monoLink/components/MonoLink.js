import React from 'react';
import MonoConnect from '@mono.co/connect.js';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';

import { signinSuccess } from '../actions';


const MonoLink = () => {
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
      }
    })

    monoInstance.setup()
    
    return monoInstance;
  }, [dispatch, REACT_APP_PUBLIC_KEY])

  return (
    <div className="center_button">
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
  )
}

export default MonoLink;
