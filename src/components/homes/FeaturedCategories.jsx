const categories = [
  {
    name: 'Clothes',
    bg: 'bg-white',
    textColor: 'text-black',
    buttonStyle: 'border-black text-black hover:bg-black hover:text-white',
  },
  {
    name: 'Electronics',
    bg: 'bg-gray-50',
    textColor: 'text-black',
    buttonStyle: 'border-black text-black hover:bg-black hover:text-white',
  },
  {
    name: 'Furniture',
    bg: 'bg-gray-200',
    textColor: 'text-black',
    buttonStyle: 'border-black text-black hover:bg-black hover:text-white',
  },
  {
    name: 'Shoes',
    bg: 'bg-black',
    textColor: 'text-white',
    buttonStyle: 'border-white text-white hover:bg-white hover:text-black',
  },
];

function FeaturedCategories() {
  return (
    <section className='grid h-auto w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
      {categories.map((cat) => (
        <div
          key={cat.name}
          className={`flex h-[400px] flex-col items-start justify-end p-5 pb-10 ${cat.bg} ${cat.textColor} transition`}
        >
          <h3 className='mb-4 text-3xl font-light'>{cat.name}</h3>
          <button
            className={`rounded border px-8 py-3 text-sm transition ${cat.buttonStyle}`}
          >
            Shop Now
          </button>
        </div>
      ))}
    </section>
  );
}

export default FeaturedCategories;
