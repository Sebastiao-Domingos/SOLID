"use client";

import { userGetData } from "@/hooks/userGetData";

const Single = () => {
  const { data, isLoaading, filtro } = userGetData();

  return (
    <div className="text-center">
      <div className="flex justify-around items-center">
        <h2>Single Responsability Principle</h2>

        <div className="space-x-8">
          <button
            onClick={() => filtro({ total: data?.info.results! - 5 })}
            className="p-2 rounded bg-purple-500"
          >
            Decrementar
          </button>
          <button
            onClick={() => filtro({ total: data?.info.results! + 5 })}
            className="p-2 rounded bg-purple-500"
          >
            Incrementar
          </button>
        </div>
      </div>
      <div>
        {isLoaading && (
          <div>
            <h4>Loading...</h4>
          </div>
        )}
        {!isLoaading &&
          data?.results.length !== 0 &&
          data?.results.map((item, index) => (
            <div
              key={index}
              style={{ color: item.gender === "male" ? "red" : "black" }}
            >
              {item.name.first}
            </div>
          ))}

        {!isLoaading && !data?.results.length && <div>No, Data!</div>}
      </div>
    </div>
  );
};

export default Single;
