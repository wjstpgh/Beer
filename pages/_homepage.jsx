import React, { useEffect, useState } from 'react';
import Navbar from '@components/navbar';
import KaikasLogin from '@components/kaikasLogin';

function Homepage() {
  const [isKlaytnValid, setIsKlaytnValid] = useState(false);

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
            className="text-orange-600 hover:text-orange-400 hover:underline decoration-current decoration-wavy hover:capitalize font-serif italic"
            href="https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi"
          >
            Download Kaikas Chrome Extension
          </a>
        )}
        <br />
        <a
          className="text-orange-600 hover:text-orange-400 hover:underline decoration-current decoration-wavy hover:capitalize font-serif italic"
          href="https://ko.docs.klaytn.foundation/dapp/developer-tools/kaikas"
        >
          What is Kaikas?
        </a>
      </div>
    </>
  );
}

export default Homepage;
