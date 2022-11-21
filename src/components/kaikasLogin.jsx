/* global klaytn */
import React from 'react';
//절대경로로 svg파일 import시 err 발생중
import { ReactComponent as Logo } from '../../public/kaikaslogo.svg';

function KaikasLogin() {
  const onClickKaikasLoginPopup = async () => {
    if (klaytn.isKaikas) {
      if (klaytn.selectedAddress === undefined) {
        const account = await klaytn.enable();
        alert(`Address ${account} connect`);
      } else {
        alert('Already connect');
        console.log(klaytn);
      }
    } else {
      alert('no kaikas');
    }
  };

  return (
    <div className="text-center">
      <button
        className="mb-4 px-14 py-3 bg-orange-600 rounded-2xl hover:bg-orange-800"
        type="button"
        onClick={onClickKaikasLoginPopup}
      >
        <Logo className="inline" />
        <p className="text-white">Connect to Kaikas</p>
      </button>
    </div>
  );
}

export default KaikasLogin;
