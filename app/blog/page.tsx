import { Button } from "@/components/ui/button";
import { getPosts } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function BlogPage() {
  const posts = await getPosts(); 

  return (
    <div className="min-h-screen dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto py-16 text-center space-y-6 p-5">
        <h1 className="text-3xl md:text-5xl font-extrabold dark:text-white text-gray-800 tracking-tight">
          Welcome to Our Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore the latest trends, insights, and stories from industry
          experts. Stay informed with our regular blog updates on tech,
          business, and creativity.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto py-5 p-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="block h-full p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="mb-4 w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{post.excerpt}</p>
            <Button asChild variant="outline">
              <Link
                href={`/blog/${post.id}`}
                className="inline-block mt-4  hover:underline"
              >
                Learn more
              </Link>
            </Button>
          </div>
        ))}
      </div>

     
    </div>
  );
}
