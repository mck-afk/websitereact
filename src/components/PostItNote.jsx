import React from "react";

const PostItNote = ({
  id,
  className,
  onClick,
  style,
  title,
  children
}) => (
  <blockquote
    id={id}
    className={className}
    onClick={onClick}
    style={style}
  >
    <h1>{title}</h1>
    {children}
    <cite className="actions"> ⤷ </cite>
  </blockquote>
);

export default PostItNote;
