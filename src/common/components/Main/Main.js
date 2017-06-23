import React from 'react';
import AppBarContainer from '../../containers/AppBarContainer';

const Main = (props) => (
  <div style={{backgroundColor:"#f7f7f7"}}>
    <AppBarContainer />
    <div>
      {props.children}
    </div>
  </div>
);

export default Main;