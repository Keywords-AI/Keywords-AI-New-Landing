import React from "react";
import { blogs } from "../../blog/articles/articles";
import { Largecard } from "../../blog/components/Largecard";
import { MediumCard } from "../../blog/components/Mediumcard";

export default function Blog() {
  const blogs_list = blogs.slice().reverse();

  return (
    <div className="flex flex-col items-center gap-lg self-stretch pt-[140px] px-sm pb-[120px] ">
      <span className="text-gray-white max-w-[1200px] w-full display-sm">
        Blog
      </span>
      <div className="flex flex-col items-start gap-lg max-w-[1200px] w-full ">
        <div className="flex flex-row items-start gap-md self-stretch">
          {blogs_list.slice(0, 2).map((blog) => (
            <Largecard
              key={blog.id}
              image={blog.cover.url} // Assuming cover.url is the image URL
              title={blog.title}
              date={blog.timestamp}
              type={blog.type}
              author={blog.author.image.url}
              slug={blog.slug}
              id={blog.id}
            />
          ))}
        </div>
        <div className=" flex flex-wrap items-start gap-md self-stretch ">
          {blogs_list.slice(2).map((blog) => (
            <MediumCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
