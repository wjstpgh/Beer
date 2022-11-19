import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../store/beerwish';

const BeerWish = ({ beer }) => {
  const { name, image_url } = beer;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BEER,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && !dropResult) {
        alert(`${item.name}가 리스트에서 제거됩니다.`);
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
      className="p-1 inline-flex bg-orange-800 rounded-md text-orange-300 cursor-pointer"
    >
      <img className="h-24" src={image_url} alt="#" />
      <div className="text-2xl">{name}</div>
    </div>
  );
};

export default BeerWish;
