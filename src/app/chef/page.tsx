import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/components/Header";

interface IChefs {
  name: string;
  positing: string;
  image: string;
  slug: string;
}

import { client } from "@/sanity/lib/client";

const page = async () => {
  const Chefs: IChefs[] = await client.fetch(`
    *[_type == "chef"]{
      name, 
      positing,
      "image": image.asset->url,
      "slug": slug.current,
    }
  `);

  return (
    <div>
      <Header />
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/allnav.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Chef</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            › Chef
          </p>
        </div>
      </section>
      <div className="mt-[20px] mb-[20px] lg:px-[120px]">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {Chefs.map((chef: IChefs) => (
                <div key={chef.slug} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt={chef.name}
                      className="object-cover object-center w-full h-full block"
                      src={chef.image}
                      width={200}
                      height={200}
                    />
                  </a>
                  <div className="mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {chef.name}
                    </h2>
                    <p className="mt-1">{chef.positing}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
