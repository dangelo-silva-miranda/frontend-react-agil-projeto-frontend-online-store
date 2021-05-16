import React from 'react';

class List extends React.Component {
  render() {
    return (
      <section>
        <input />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default List;
