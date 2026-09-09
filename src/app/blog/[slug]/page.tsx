import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, getBlogCategoryName } from "@/lib/blogs";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({
  params,
}: BlogPageProps) {

  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#0B1F3A] text-white py-14">

        <div className="max-w-4xl mx-auto px-6">

          <Link
            href="/blog"
            className="text-[#C4A15A] font-semibold hover:underline"
          >
            ← Back to Blog
          </Link>

          <p className="text-[#C4A15A] font-semibold uppercase tracking-wide mt-8">
            {getBlogCategoryName(blog.categoryId)}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mt-6">

            <span>
              By {blog.author}
            </span>

            <span>•</span>

            <span>
              {blog.publishedDate}
            </span>

            <span>•</span>

            <span>
              {blog.readTime}
            </span>

          </div>

        </div>

      </section>


      {/* FEATURED IMAGE */}
      <section className="px-6">

        <div className="max-w-5xl mx-auto -mt-8">

          <div className="relative h-[250px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">

            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover"
            />

          </div>

        </div>

      </section>


      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-6 py-14">

        {blog.sections.map((section, index) => (

          <section key={index} className="mb-10">

            {section.heading && (
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-5">
                {section.heading}
              </h2>
            )}


            {section.paragraphs?.map((paragraph, paragraphIndex) => (

              <p
                key={paragraphIndex}
                className="text-gray-700 leading-8 text-base md:text-lg mb-5"
              >
                {paragraph}
              </p>

            ))}


            {section.points && (

              <ul className="space-y-3 mt-5">

                {section.points.map((point, pointIndex) => (

                  <li
                    key={pointIndex}
                    className="flex gap-3 text-gray-700 leading-relaxed"
                  >

                    <span className="text-[#C4A15A] font-bold">
                      ✓
                    </span>

                    <span>
                      {point}
                    </span>

                  </li>

                ))}

              </ul>

            )}

          </section>

        ))}


        {/* CTA */}
        {blog.courseUrl && (
          <div className="mt-14 bg-[#F5F8FA] rounded-2xl p-8 text-center">

            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Interested in {blog.courseTitle || "This Course"}?
            </h2>

            <p className="text-gray-600 mt-3">
              Explore our {blog.courseTitle || "related"} course
              and discover your study options.
            </p>

            <Link
              href={blog.courseUrl}
              className="inline-block mt-6 bg-[#C4A15A] text-white px-7 py-3 rounded-full font-semibold  transition"
            >
              View Course
            </Link>

          </div>
        )}

      </article>

    </main>
  );
}