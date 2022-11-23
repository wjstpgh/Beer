/* global klaytn */
import React, { useState } from 'react';
import Alert from '@components/alert';
import { useTranslation } from 'next-i18next';

function KaikasLogin() {
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  const { t } = useTranslation('common');

  const onClickKaikasLoginPopup = async () => {
    if (klaytn.isKaikas) {
      if (klaytn.selectedAddress === undefined) {
        await klaytn.enable();
        setAlertMsg('Kaikas connect');
        setAlertIsOpen(true);
      } else {
        setAlertMsg('Already connect');
        setAlertIsOpen(true);
      }
    } else {
      setAlertMsg('no kaikas');
      setAlertIsOpen(true);
    }
  };

  return (
    <div className="text-center">
      <button
        className="mb-4 px-14 py-3 bg-orange-600 rounded-2xl hover:bg-orange-800"
        type="button"
        onClick={onClickKaikasLoginPopup}
      >
        <img className="inline w-7" src="../kaikas.png" />
        <p className="text-white">{t('Connect to Kaikas')}</p>
      </button>
      <Alert
        alertIsOpen={alertIsOpen}
        setAlertIsOpen={setAlertIsOpen}
        alertMsg={alertMsg}
      />
    </div>
  );
}

export default KaikasLogin;
