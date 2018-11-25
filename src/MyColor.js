import React from 'react';

const MyColor = ({ color }) => {
  const style = {
    color
  };
  return <div style={style}>my color = {color}</div>;
};

export default MyColor;
