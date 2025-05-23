import React from "react";
// import TagLine from "./TagLine";
const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {/* {tag && <TagLine className="tagline">{tag}</TagLine>} */}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
