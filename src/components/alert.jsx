import React from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';

function Alert({ alertIsOpen, setAlertIsOpen, alertMsg, subject = '' }) {
  const { t } = useTranslation('common');

  return (
    <Modal
      className="w-auto"
      isOpen={alertIsOpen}
      onRequestClose={() => {
        setAlertIsOpen(false);
      }}
      ariaHideApp={false}
    >
      <div className="absolute top-16 left-1/3 w-4/12 p-5 text-center bg-orange-500/20 backdrop-blur-sm rounded-xl">
        {subject}&nbsp;
        {t(`${alertMsg}`)}
      </div>
    </Modal>
  );
}

export default Alert;
