import { client } from "@/sanity/lib/client";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

const getBlogs = async (slug) => {
  const query = `*[_type == "post" && slug.current == $slug]{title, image, body, publishedAt}[0]`;

  const data = await client.fetch(query, { slug });
  return data;
};

const SinglePage = async ({ params }) => {
  const { slug } = await params;

  const blogSlug = slug;

  console.log(blogSlug);

  const getSinglePost = await getBlogs(blogSlug);

  console.log(getSinglePost);
  return (
    <div className="center container">
      <div className="w-full h-[500px]">
        <Image
          src={urlFor(getSinglePost.image).url()}
          alt={getSinglePost?.title}
          width={500}
          height={400}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <h3 className="mt-5 text-2xl font-bold">{getSinglePost.title}</h3>

      <div className="mt-20">
        <PortableText
          value={getSinglePost.body}
          className="prose lg:prose-xl"
        />
      </div>
    </div>
  );
};

export default SinglePage;
