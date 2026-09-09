import Link from "next/link";
import Image from "next/image";
import { blogs, getBlogCategoryName } from "@/lib/blogs";

export default function BlogPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-[#C4A15A] font-semibold uppercase tracking-wide">
            Cardinal Institute
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Our Blog
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-gray-200">
            Practical tips, training insights and helpful information about CPR, first aid, workplace safety and emergency response skills.
          </p>

        </div>
      </section>


      {/* BLOG POSTS */}
      <section className="py-16 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog) => (

              <article
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >

                <div className="relative h-56">

                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />

                </div>


                <div className="p-6">

                  <p className="text-sm font-semibold text-[#2a6f97]">
                    {getBlogCategoryName(blog.categoryId)}
                  </p>

                  <h2 className="text-xl font-bold text-[#0B1F3A] mt-2">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>


                  <div className="flex justify-between items-center mt-6">

                    <span className="text-xs text-gray-500">
                      {blog.readTime}
                    </span>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-[#C4A15A] font-semibold hover:underline"
                    >
                      Read More →
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}