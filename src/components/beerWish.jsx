import React, { memo } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '@store/beerwish';

function BeerWish({ beer, getBeerIdtoDelete }) {
  const { id, name, image_url } = beer;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BEER,
    item: { id, name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && !dropResult) {
        alert(`${item.name}가 리스트에서 제거됩니다.`);
        getBeerIdtoDelete(item.id);
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
    </div>
  );
}

export default memo(BeerWish);
