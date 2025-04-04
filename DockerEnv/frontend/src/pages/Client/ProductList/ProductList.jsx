import Product from '~/components/Product/Product'

function ProductList() {
  return (
    <div className="container mx-auto">
      <ul className="p-0 flex items-center justify-between w-full py-4">
        <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Trang sức</li>
        <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Quần áo</li>
        <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Dây chuyền</li>
        <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Đồng hồ</li>
        <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Giày dép</li>
        <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Phụ kiện</li>
        <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Quà tặng</li>
      </ul>

      <ul className="flex items-center gap-10 my-10">
        <li className="border border-gray-500 rounded-full py-1 px-6 cursor-pointer hover:border-[2px]">Sweater</li>
        <li className="border border-gray-500 rounded-full py-1 px-6 cursor-pointer hover:border-[2px]">Hoodie</li>
        <li className="border border-gray-500 rounded-full py-1 px-6 cursor-pointer hover:border-[2px]">Mangto</li>
        <li className="border border-gray-500 rounded-full py-1 px-6 cursor-pointer hover:border-[2px]">Jean</li>
      </ul>

      <div className="grid grid-cols-4 gap-6 mb-10">
        {[...Array(40)].map((_, index) => (<Product key={index}/>))}
      </div>
    </div>
  )
}

export default ProductList