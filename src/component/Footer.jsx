import React from "react";

function Footer() {
  return (
    <div className="paddnigFooter">
      <div className="px-5 pt-4 pb-20 border-t-2">
        <h1 className="text-3xl font-bold">Hamza Abdous</h1>
        <h2 className="text-xl">
          Full-stack Developer • {new Date().getFullYear()}
        </h2>
      </div>
    </div>
  );
}

export default Footer;
