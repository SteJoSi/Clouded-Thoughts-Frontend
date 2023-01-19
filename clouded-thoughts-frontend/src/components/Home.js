import React from 'react';

import CreateAccount from './CreateAccount';
import Header from './Header';

function Home({addUser}) {
  return (
    <div>
      <Header />
      <CreateAccount addUser={addUser} />
    </div>
  )
}

export default Home
