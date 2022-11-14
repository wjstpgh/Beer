import Beer from "../components/beer";
import Navbar from "../components/navbar";
import { useInfiniteQuery } from "react-query";
import { useInView } from 'react-intersection-observer'
import { useEffect, Fragment, useState } from "react";
import Slider,{Range} from 'rc-slider';

const ListPage = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [abv_gt, setGt] = useState(1);
  const [abv_lt, setLt] = useState(55);

  // let gt
  // let lt
  // let left
  // let right
  // let range

  // if (process.browser) {
  //   gt = document.getElementById("abv_gt");
  //   lt = document.getElementById("get_lt");
  //   left = document.getElementById("left");
  //   right = document.getElementById("right");
  //   range = document.getElementById("range");
  // }


  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const getBeer = (page) => {
    return fetch(
      `https://api.punkapi.com/v2/beers?abv_gt=${abv_gt}&abv_lt=${abv_lt}&page=${page}&per_page=30`
    ).then((res) => res.json())
  }

  const { data, status, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["beer"],
    async ({ pageParam = 1 }) => {
      return await getBeer(pageParam);
    },
    {
      getNextPageParam: (last, all) => {
        const isNext = last.length;
        const next = all.length + 1;
        return isNext ? next : false;
      }
    }
  );

  // const setLeft = (e) => {
  //   const { value, min, max } = e.target;

  // }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-20 py-8 backdrop-blur-sm bg-stone-50/30 rounded-xl">
        {/* <form className="container flex justify-center items-center">
          <div className="w-full h-full flex flex-col justify-start items-center relative">
            <input type="range" id="abv_gt" min="1" max="55" value="1" />
            <input type="range" id="abv_lt" min="1" max="55" value="55" />
            <div className="relative w-full h-2 my-3 bg-orange-300 rounded">
              <div id="range" className="absolute inset-0 bg-orange-600 rounded"></div>
              <div id="left" className="absolute top-0 left-0 -translate-y-1 w-4 h-4 bg-black rounded-full"></div>
              <div id="right" className="absolute top-0 right-0 -translate-y-1 w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </form> */}
        {/* <Range /> */}
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