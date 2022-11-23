import React, { memo, useState } from 'react';
import Alert from '@components/alert';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '@store/beerwish';

function BeerWish({ beer, getBeerIdtoDelete }) {
  const { id, name, image_url } = beer;
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BEER,
    item: { id, name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && !dropResult) {
        setAlertMsg('is removed from the list');
        setAlertIsOpen(true);
        setTimeout(() => {
          getBeerIdtoDelete(item.id);
        }, 1000);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div
      ref={drag}
      style={{ opacity }}
      className="inline-flex p-1 bg-orange-800 text-orange-300 rounded-md cursor-pointer"
    >
      <img className="h-24" src={image_url} alt="#" />
      <div className="text-2xl">{name}</div>
      <Alert
        alertIsOpen={alertIsOpen}
        setAlertIsOpen={setAlertIsOpen}
        alertMsg={alertMsg}
        subject={name}
      />
    </div>
  );
}

export default memo(BeerWish);
