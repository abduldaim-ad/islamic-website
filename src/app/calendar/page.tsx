import React from "react";
import Calendar from "./Calendar";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-around">
        <Calendar />
        <Calendar />
        <Calendar />
        <Calendar />
        <Calendar />
        <Calendar />
        <Calendar />
        <Calendar />
      </div>
    </>
  );
};

export default page;
