import React, { useEffect, useState } from 'react';
import Navbar from '@components/navbar';
import KaikasLogin from '@components/kaikasLogin';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

function Homepage() {
  const [isKlaytnValid, setIsKlaytnValid] = useState(false);

  const { t } = useTranslation('common');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (typeof window.klaytn !== 'undefined') {
        setIsKlaytnValid(true);
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-20 py-8 backdrop-blur-sm bg-stone-50/30 rounded-xl">
        {isKlaytnValid ? (
          <KaikasLogin />
        ) : (
          <a
            className="font-serif italic decoration-current decoration-wavy text-orange-600 hover:text-orange-400 hover:underline hover:capitalize"
            href="https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi"
          >
            {t('Download Kaikas Chrome Extension')}
          </a>
        )}
        <br />
        <a
          className="font-serif italic decoration-current decoration-wavy text-orange-600 hover:text-orange-400 hover:underline hover:capitalize"
          href="https://ko.docs.klaytn.foundation/dapp/developer-tools/kaikas"
        >
          {t('What is Kaikas?')}
        </a>
      </div>
    </>
  );
}

export default Homepage;
