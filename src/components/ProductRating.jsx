import React from 'react';

class ProductRating extends React.Component {
  render() {
    return (
      <div>
        <form action="get">
          <input type="text" name="name" placeholder="Nome" id="name" />
          <textarea
            name="comment"
            placeholder="Insira seu comentário sobre esse produto aqui"
            id="comment"
            cols="30"
            rows="5"
            data-testid="product-detail-evaluation"
          />
        </form>
      </div>
    );
  }
}

export default ProductRating;
