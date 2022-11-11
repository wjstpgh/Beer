import { useState } from 'react';
import Modal from 'react-modal';
import BeerDetail from './beer-detail';

const Beer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalOpenHandler = () => {
    setModalIsOpen(true);
  }

  return (
    <>
      <tr className="grid grid-cols-6">
        <td
          className="col-span-4 text-orange-600 hover:text-orange-400 hover:underline decoration-current decoration-wavy lowercase hover:capitalize font-serif italic cursor-pointer"
          onClick={modalOpenHandler}
        >
          name
        </td>
        <td className="col-span-1 text-center">
          abv
        </td>
        <td
          className="col-span-1 hover:scale-125 text-center cursor-pointer"
        // onClick={ }
        >
          &#43;
        </td>
      </tr>
      <Modal
        className="w-auto"
        isOpen={modalIsOpen}
        onRequestClose={() => { setModalIsOpen(false) }}
        ariaHideApp={false}
      >
        <BeerDetail />
      </Modal>
    </>
  );
}

export default Beer;
