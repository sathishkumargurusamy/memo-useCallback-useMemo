import React, { memo, useState } from 'react';

const Child = ({ childVar, incrementChildVariable }) => {
  console.log('Hello from Child');

  return (
    <div>
      <h3>Child variable : {childVar}</h3>
      <button onClick={incrementChildVariable}>Increment Child Variable</button>
    </div>
  );
};

export default memo(Child);
