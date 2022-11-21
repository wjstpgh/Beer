/* global klaytn */
import React from 'react';
//절대경로로 svg파일 import시 err 발생중
import { ReactComponent as Logo } from '../../public/kaikaslogo.svg';

function KaikasLogin() {
  const onClickKaikasLoginPopup = async () => {
    if (klaytn.isKaikas) {
      const account = await klaytn.enable();
      console.log(account); //지갑 address get test,삭제예정
    } else {
      alert('no kaikas');
    }
  };

  const onClickKaikasLogout = () => {
    //다음 이슈에서 구현예정
    klaytn.selectedAddress = [];
  };

  return (
    <div className="text-center">
      <button
        className="bg-orange-600 hover:bg-orange-800 px-14 py-3 mb-4 rounded-2xl"
        type="button"
        onClick={onClickKaikasLoginPopup}
      >
        <Logo className="inline" />
        <p className="text-white">Connect to Kaikas</p>
      </button>
      <button
        className="bg-orange-600 hover:bg-orange-800 px-14 py-3 rounded-2xl"
        type="button"
        onClick={onClickKaikasLogout}
      >
        <p className="text-white">Kaikas Disconnect</p>
      </button>
    </div>
  );
}

export default KaikasLogin;
