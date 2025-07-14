import { useEffect, useState } from 'react';
import axios from 'axios';

const categories = ['All', 'Clothes', 'Electronics', 'Furniture', 'Shoes'];

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=8')
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error('Failed to fetch products', err));
  }, []);

  // 필터링된 상품
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) =>
          product.category
            .toLowerCase()
            .includes(selectedCategory.toLowerCase())
        );

  return (
    <section className='px-40 py-8'>
      <div className='mb-6 flex gap-6 border-none'>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`border-b-3 pb-3 text-xl font-medium ${
              selectedCategory === cat
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className='flex flex-col items-center rounded-lg border-none bg-[#F6F6F6] p-4 text-center transition hover:shadow-lg'
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className='mb-4 h-48 w-full object-contain'
            />
            <h3 className='text-md mb-2 line-clamp-2 font-semibold'>
              {product.title}
            </h3>
            <p className='mb-4 text-lg font-bold'>${product.price}</p>
            <button className='rounded bg-black px-4 py-2 text-white hover:bg-gray-800'>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
