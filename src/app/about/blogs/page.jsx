import React from 'react';
import Link from 'next/link';
const blogs = [
  {
    id: 1,
    title: "Understanding React Router",
    author: "Md. Khalid Shaifullah",
    date: "2026-10-25",
    description: "A comprehensive guide to dynamic routing and data loading patterns in modern React applications.",
    tags: ["React", "JavaScript", "Web Development"]
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS and DaisyUI",
    author: "Sarah Jenkins",
    date: "2026-10-20",
    description: "Build beautiful and responsive user interfaces instantly using utility-first CSS and pre-built components.",
    tags: ["Tailwind", "UI/UX", "CSS"]
  },
  {
    id: 3,
    title: "Next.js App Router vs Pages Router",
    author: "Alex Rivera",
    date: "2026-10-15",
    description: "Explore the architectural differences, server components, and routing file conventions in Next.js.",
    tags: ["Next.js", "React", "Frontend"]
  },
  {
    id: 4,
    title: "Optimizing Performance in Web Apps",
    author: "David Miller",
    date: "2026-10-10",
    description: "Practical techniques to reduce bundle size, implement lazy loading, and enhance user experience.",
    tags: ["Performance", "Optimization", "JavaScript"]
  }
];
const Blogscontent = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl text-center'>Blogs</h1>
            <div>
                {blogs.map(blog=> <div key={blog.id}>
                     <h3 className='text-xl font-semibold'>{blog.title}</h3>
                    <Link href={`/about/blogs/${blog.id}`}>Show link</Link>
                     </div>)}
            </div>
        </div>
    );
};

export default Blogscontent;