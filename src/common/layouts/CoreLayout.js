import React from 'react';

import Header from '../components/Header';
import Player from '../components/Player';
import SideBar from '../components/SideBar';

function CoreLayout({ children, history }) {
  return (
    <div className="main">
      <SideBar />
      <div className="main__content">
        <Header history={history} />
        <div className="main__content__child">{children}</div>
      </div>
      <Player />
    </div>
  );
}

export default CoreLayout;
