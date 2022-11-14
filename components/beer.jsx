import { useState } from 'react';
import Modal from 'react-modal';
import BeerDetail from './beer-detail';

const Beer = ({ beer }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id, name, abv } = beer

  const modalOpenHandler = () => {
    setModalIsOpen(true);
  }

  return (
    <>
      <tr className="grid grid-cols-6">
        <td
          className="col-span-1 text-orange-800 text-center"
          onClick={modalOpenHandler}
        >
          {id}
        </td>
        <td
          className="col-span-3 text-orange-600 hover:text-orange-400 hover:underline decoration-current decoration-wavy lowercase hover:capitalize font-serif italic cursor-pointer"
          onClick={modalOpenHandler}
        >
          {name}
        </td>
        {(abv > 20) ? (
          <td className="col-span-1 text-center text-red-700">
            {abv}
          </td>
        ) : ((abv > 7) ? (
          <td className="col-span-1 text-center text-red-600">
            {abv}
          </td>
        ) : (
          <td className="col-span-1 text-center text-red-400">
            {abv}
          </td>
        ))}
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
        <BeerDetail key={beer.id} beer={beer} />
      </Modal>
    </>
  );
}

export default Beer;
