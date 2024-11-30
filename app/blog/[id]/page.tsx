import { notFound } from "next/navigation";
import { getPostById } from "@/data/data";
import Image from "next/image";
import ShareBlogPopover from "@/components/ShareBlogPopover";

interface Params {
  params: {
    id: string;
  };
}

export default async function BlogDetailPage({ params }: Params) {
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:1337";
  const postUrl = `${baseUrl}/blog/${post.id}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
          {post.title}
        </h1>
        <p className="text-gray-500 mb-4">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="mb-6 rounded-lg object-cover shadow-md"
        />
        <div className="prose dark:prose-invert mb-8">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        <hr className="my-6 border-gray-300 dark:border-gray-700" />
        <div className="text-gray-600 dark:text-gray-300">
          <p>Share this post:</p>
          <ShareBlogPopover url={postUrl} />
        </div>
      </div>
    </div>
  );
}
