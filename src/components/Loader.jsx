import React from "react";
import { Discuss } from "react-loader-spinner";
export function Loader() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-slate-300">
      <div className="relative top-1/2 left-1/2 translate-x-[-5%] translate-y-[-50%]">
        <Discuss
          visible={true}
          height="80"
          width="80"
          ariaLabel="discuss-loading"
          wrapperStyle={{}}
          wrapperClass="discuss-wrapper"
        />
      </div>
    </div>
  );
}
