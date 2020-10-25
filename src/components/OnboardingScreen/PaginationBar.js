import React from 'react';
import Dots from 'react-native-dots-pagination';

import colors from 'colors';

const PaginationBar = ({
  active,
  length,
}) => {
  const view = (
    <Dots
      length={length}
      active={active}
      activeColor={colors.turtleGreen}
      passiveColor={colors.darkGrey}
    />
  );
  return view;
};

export default PaginationBar;
