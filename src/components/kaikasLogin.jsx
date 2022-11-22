/* global klaytn */
import React from 'react';

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
        <img className="inline w-7" src="./kaikas.png" />
        <p className="text-white">Connect to Kaikas</p>
      </button>
    </div>
  );
}

export default KaikasLogin;
