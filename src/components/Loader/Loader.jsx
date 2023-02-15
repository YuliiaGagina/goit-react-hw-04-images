
import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner';


export const Loader =() =>{

    return (
        <div
        style={{
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '2',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            background: 'rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <FidgetSpinner
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  ballColors={['#ff0000', '#00ff00', '#0000ff']}
  backgroundColor="#F4442E"
/>
        </div>
    )
} 