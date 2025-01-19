'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaSearch } from "react-icons/fa"; 
import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";

interface FoodItem {
  name: string;
  _id: string;
  imageUrl: string;
  price: number;
  slug: { current: string };
}

const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("Newest");
  const [shop, setShop] = useState<FoodItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Query = `*[_type == "food"] {
          name,
          _id,
          "imageUrl": image.asset->url,
          slug,
          price,
        }`;
        const data = await client.fetch(Query);
        console.log("Fetched data:", data); // Debug line
        setShop(data);
      } catch (error) {
        console.error("Error fetching data:", error); // Error handling
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/allnav.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Shop</h2>
          <p className="pt-[10px]">
            <Link href="/" className="text-yellow-400">Home</Link> › Shop
          </p>
        </div>
      </section>
      <div className="flex">
        <div className="container min-w-[75%] mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
            <div className="relative mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search shop..."
                className="border border-gray-300 rounded-md pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-xl text-gray-700">Sort By:</span>
              <select
                value={sortOption}
                className="border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option>Newest</option>
                <option>Oldest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {shop.map((product) => (
              <Link key={product._id} href={`/shop/${product._id}`} passHref>
                <div className="relative bg-[#F7F7F7] rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105">
                  <img
                    className="h-[200px] w-full object-cover"
                    src={product.imageUrl}
                  />
                  <div className="p-4 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xl font-semibold text-yellow-500">
                          ${product.price}
                        </span>
                        <button className="flex items-center gap-2 bg-[#8f8d8d] text-white rounded-md p-2 hover:bg-[#6d6b6b] transition-all focus:outline-none">
                          <FaShoppingCart className="text-lg" />
                          <span className="text-sm font-semibold">Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
