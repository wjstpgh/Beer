/* global klaytn */
import React, { useState } from 'react';
import BeerDetail from '@components/beerDetail';
import { useRecoilState } from 'recoil';
import { beerWish } from '@store/beerwish';
import Modal from 'react-modal';

function Beer({ beer }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [wishList, setWishList] = useRecoilState(beerWish);
  const { id, name, abv, image_url } = beer;

  const abvTextColor = (abv) => {
    if (abv < 7) {
      return 'text-red-400';
    } else if (abv < 20) {
      return 'text-red-600';
    } else {
      return 'text-red-700';
    }
  };

  const modalOpenHandler = () => {
    setModalIsOpen(true);
  };

  const addBeer = () => {
    console.log(klaytn.selectedAddress);
    if (klaytn.selectedAddress === undefined) {
      alert('kaikas를 먼저 연결해주세요.');
    } else if (wishList.findIndex((listItem) => listItem.id === id) === -1) {
      setWishList([...wishList, { id: id, name: name, image_url: image_url }]);
      alert(`add '${name}' to wish list`);
    }
  };

  return (
    <>
      <tr className="grid grid-cols-6 leading-8">
        <td className="col-span-1 text-orange-800 text-center">{id}</td>
        <td
          className="col-span-3 font-serif italic lowercase text-orange-600  decoration-current decoration-wavy hover:text-orange-400 hover:underline hover:capitalize cursor-pointer"
          onClick={modalOpenHandler}
        >
          {name}
        </td>
        <td className="col-span-1 text-center">
          <span className={abvTextColor(abv)}>{abv}</span>
        </td>
        <td
          className="col-span-1 text-center hover:scale-125 cursor-pointer"
          onClick={addBeer}
        >
          &#43;
        </td>
      </tr>
      <Modal
        className="w-auto"
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        ariaHideApp={false}
      >
        <BeerDetail key={beer.id} beer={beer} />
      </Modal>
    </>
  );
}

export default Beer;
