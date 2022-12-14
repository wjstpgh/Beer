import React, { useEffect, Fragment, useState } from 'react';
import Beer from '@components/beer';
import Navbar from '@components/navbar';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Slider from 'rc-slider';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

function ListPage() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const abvRange = { min: 0, max: 56 };
  const [minAbv, setMinAbv] = useState(abvRange.min);
  const [maxAbv, setMaxAbv] = useState(abvRange.max);

  const { t } = useTranslation('common');

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const getBeer = (minAbv, maxAbv, page) => {
    return fetch(
      `https://api.punkapi.com/v2/beers?abv_gt=${minAbv}&abv_lt=${maxAbv}&page=${page}&per_page=50`,
    ).then((res) => res.json());
  };

  const { data, status, hasNextPage, fetchNextPage, remove } = useInfiniteQuery(
    ['beer'],
    async ({ pageParam = 1 }) => {
      return await getBeer(minAbv, maxAbv, pageParam);
    },
    {
      getNextPageParam: (last, all) => {
        const isNext = last.length;
        const next = all.length + 1;
        return isNext ? next : false;
      },
    },
  );

  const slideChangeHandler = (slideRange) => {
    const [min, max] = slideRange;
    setMinAbv(min);
    setMaxAbv(max);
    remove();
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-20 py-8 backdrop-blur-sm bg-stone-50/30 rounded-xl">
        <Slider
          range="true"
          min={0}
          max={56}
          defaultValue={[0, 56]}
          step={1}
          onAfterChange={slideChangeHandler}
          allowCross={false}
        />
        <p className="text-center mb-9 text-orange-500">
          {`${minAbv} < ${t('abv')} < ${maxAbv}`}
        </p>
        <table className="container table-auto">
          <thead>
            <tr className="grid grid-cols-6">
              <th className="col-span-1">No.</th>
              <th className="col-span-3">{t('Beer name')}</th>
              <th className="col-span-1">{t('abv')}</th>
              <th className="col-span-1">{t('add to cart')}</th>
            </tr>
          </thead>
          <tbody>
            {status === 'loading' ? (
              <tr>
                <td>loading...</td>
              </tr>
            ) : (
              <>
                {data.pages.map((page, i) => (
                  <Fragment key={i}>
                    {page.map((beer) => (
                      <Beer key={beer.id} beer={beer} />
                    ))}
                  </Fragment>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      <div ref={ref}></div>
    </div>
  );
}

export default ListPage;
