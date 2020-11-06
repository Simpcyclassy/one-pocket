import React from 'react';
import MonoConnect from '@mono.co/connect.js';
import { publicKey } from './config';

const MonoLink = () => {
  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect(publicKey, {
      onClose: () => console.log('Widget closed'),
      onLoad: () => console.log('Widget loaded successfully'),
      onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`)
    })

    monoInstance.setup()
    
    return monoInstance;
  }, [])

  return (
    <div>
      <button onClick={() => monoConnect.open()}>
        Authenticate with Mono
      </button>
    </div>
  )
}

export default MonoLink;
