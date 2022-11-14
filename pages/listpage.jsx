import Beer from "../components/beer";
import Navbar from "../components/navbar";
import { useInfiniteQuery } from "react-query";
import { useInView } from 'react-intersection-observer'
import { useEffect, Fragment, useState } from "react";

const ListPage = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [abv_gt, setGt] = useState(0);
  const [abv_lt, setLt] = useState(55);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const getBeer = (page) => {
    const data = fetch(
      `https://api.punkapi.com/v2/beers?abv_gt=${abv_gt}&abv_lt=${abv_lt}&page=${page}&per_page=30`
    ).then((res) => res.json())

    return data;
  }

  const { data, status, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["beer"],
    async ({ pageParam = 1 }) => {
      return await getBeer(pageParam);
    },
    {
      getNextPageParam: (last, all) => {
        const max = last.length / 30;
        const next = all.length + 1;
        return max ? next : undefined;
      }
    }
  );

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-20 py-8 backdrop-blur-sm bg-stone-50/30 rounded-xl">
        <table className="container table-auto">
          <thead>
            <tr className="grid grid-cols-6">
              <th className="col-span-4">Beer name</th>
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