import React from "react";

const PostItNote = ({
  id,
  className,
  onClick,
  style,
  title,
  lastUpdated,
  children
}) => (
  <blockquote
    id={id}
    className={className}
    onClick={onClick}
    style={style}
  >
    <cite className="actions">{lastUpdated}</cite>
    <h1>{title}</h1>
    {children}
    
  </blockquote>
);

export default PostItNote;
