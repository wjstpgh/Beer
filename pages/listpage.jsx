import Beer from "../components/beer";
import Navbar from "../components/navbar";
import { useInfiniteQuery } from "react-query";
import { useInView } from 'react-intersection-observer'
import { useEffect, Fragment, useState } from "react";
import Slider from "rc-slider";

const ListPage = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [abv_gt, setGt] = useState(0);
  const [abv_lt, setLt] = useState(56);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const getBeer = (abv_gt, abv_lt, page) => {
    return fetch(
      `https://api.punkapi.com/v2/beers?abv_gt=${abv_gt}&abv_lt=${abv_lt}&page=${page}&per_page=50`
    ).then((res) => res.json())
  }

  const { data, status, hasNextPage, fetchNextPage, remove } = useInfiniteQuery(
    ["beer"],
    async ({ pageParam = 1 }) => {
      return await getBeer(abv_gt, abv_lt, pageParam);
    },
    {
      getNextPageParam: (last, all) => {
        const isNext = last.length;
        const next = all.length + 1;
        return isNext ? next : false;
      }
    }
  );

  const slideChangeHandler = (e) => {
    setGt(e[0]);
    setLt(e[1]);
    remove();
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-20 py-8 backdrop-blur-sm bg-stone-50/30 rounded-xl">
        <Slider
          range='true'
          min={0}
          max={56}
          defaultValue={[0, 56]}
          step={1}
          onAfterChange={slideChangeHandler}
          allowCross={false}
        />
        <p className="text-center mb-9 text-orange-500">
          {`${abv_gt} < abv < ${abv_lt}`} 
        </p>
        <table className="container table-auto">
          <thead>
            <tr className="grid grid-cols-6">
              <th className="col-span-1">No.</th>
              <th className="col-span-3">Beer name</th>
              <th className="col-span-1">abv</th>
              <th className="col-span-1">add to cart</th>
            </tr>
          </thead>
          <tbody>
            {status === 'loading' ? (
              <tr><td>loading...</td></tr>
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