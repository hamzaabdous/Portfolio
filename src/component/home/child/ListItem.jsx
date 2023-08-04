import React from "react";

const ListItem = ({ icon, text }) => {
  return (
    <li className="flex p-3 my-2 mr-3 space-x-2 font-thin transition ease-in-out delay-150 bg-gray-200 rounded-lg dark:bg-gray-900 duration-250 hover:-translate-y-1 hover:scale-110 hover:rounded-lg">
      <span>{icon({ className: "h-6 w-6" })}</span>
      <span>{text}</span>
    </li>
  );
};

export default ListItem;
