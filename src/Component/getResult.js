import React from 'react';

const getResult = (param1) => {
  const fileUrl = `./ex.html?param1=${encodeURIComponent(param1)}`;

  return (
    <iframe src={fileUrl} title="HTML File" />
  );
};

export default getResult;