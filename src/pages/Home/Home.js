import React from 'react';

import InputSearch from '../../components/List';
import Categories from '../../components/Categories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <section>
          <InputSearch />
        </section>
        <section>
          <Categories />
        </section>
      </div>
    );
  }
}

export default Home;
