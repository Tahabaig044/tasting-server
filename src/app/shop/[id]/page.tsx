"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  // flavors?: string[];
  // sizes?: string[];
}

interface CartItem {
  id: string;
  title: string;
  price: string;
  imageSrc: string;
  // flavor: string;
  // size: string;
  quantity: number;
}

interface PageProps {
  params: { id: string };
}

const ProductDetailsPage = ({ params }: PageProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!params.id) {
        console.error("Product ID is undefined");
        return;
      }

      try {
        const query = `*[_type == "food" && _id == $id]{
          name,
          _id,
          "imageSrc": image.asset->url,
          "title": name,
          description,
          price,
        }[0]`;
        const productData = await client.fetch(query, { id: params.id });

        if (productData) {
          setProduct(productData);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    

    const cartItem: CartItem = {
      id: product!.id,
      title: product!.title,
      price: product!.price,
      imageSrc: product!.imageSrc,
      // flavor: selectedFlavor,
      // size: selectedSize,
      quantity,
    };

    setCart((prevCart) => [...prevCart, cartItem]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
    const deliveryCharges = 150; // Delivery charges in RS
    return { total, deliveryCharges, grandTotal: total + deliveryCharges };
  };

  if (!product) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <p className="text-lg text-gray-600">We couldn’t find the product you’re looking for.</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/allnav.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Welcome to Our Menu</h2>
          <p className="pt-[10px]">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            › Shop
          </p>
        </div>
      </section>
      <div className="container mx-auto p-6 py-11 mt-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative">
            <img
              className="w-full rounded-lg object-cover shadow-lg"
              src={product.imageSrc}
              alt={product.title}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-800">{product.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Flavors</h3>
              <div className="flex flex-wrap gap-3">
                {/* {product.flavors?.map((flavor) => (
                  <button
                    key={flavor}
                    className={`px-4 py-2 rounded-lg font-medium shadow-sm transition-all ${
                      selectedFlavor === flavor
                        ? "bg-yellow-500 text-white"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                    onClick={() => setSelectedFlavor(flavor)}
                  >
                    {flavor}
                  </button>
                ))} */}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sizes</h3>
              <div className="flex flex-wrap gap-3">
                {/* {product.sizes?.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-lg font-medium shadow-sm transition-all ${
                      selectedSize === size
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))} */}
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
                onClick={() => setQuantity(Math.max(quantity - 1, 1))}
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <span className="text-3xl font-bold text-yellow-500">₨ {product.price}</span>
              <button
                onClick={handleAddToCart}
                className="bg-yellow-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            <span className="text-yellow-500">Related Products</span>
          </h2>
          {/* Related Products Component */}
        </div>

        {isCartOpen && (
          <div className="fixed top-0 right-0 w-80 bg-white shadow-lg p-6 h-full z-50 overflow-auto">
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-4 right-4 text-xl"
              aria-label="Close Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 hover:text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="px-6 py-4 border-b">
              <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
            </div>

            <div className="px-4 py-4">
              {cart.length === 0 ? (
                <p className="text-lg text-gray-600 text-center mt-8">Your cart is empty.</p>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md"
                    >
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                      <div className="ml-4 flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 truncate">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {/* {item.flavor} - {item.size} */}
                        </p>
                        <p className="text-gray-700 text-sm">Quantity: {item.quantity}</p>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="ml-2 text-red-500 hover:text-red-600"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8">
                <div className="flex justify-between mb-4 text-gray-700">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-lg">{calculateTotal().total} ₨</span>
                </div>
                <div className="flex justify-between mb-4 text-gray-700">
                  <span className="text-lg font-semibold">Delivery:</span>
                  <span className="text-lg">{calculateTotal().deliveryCharges} ₨</span>
                </div>
                <div className="flex justify-between text-xl font-semibold text-yellow-500">
                  <span>Grand Total:</span>
                  <span>{calculateTotal().grandTotal} ₨</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Link href="/checkout">
                  <button className="mt-6 w-full bg-yellow-500 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
