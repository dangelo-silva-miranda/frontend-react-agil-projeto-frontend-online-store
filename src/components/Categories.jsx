import React, { Component } from 'react';

import { getCategories } from '../services/api';
import Category from './Category';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      // loading: true,
    };
  }

  componentDidMount() {
    this.updateCategories();
  }

  async updateCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
      // loading: false,
    });
  }

  render() {
    const { categories } = this.state;
    const { getCategory } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <Category
            getCategory={ getCategory }
            key={ category.id }
            category={ category }
          />
        ))}
      </div>
    );
  }
}

export default Categories;
