import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"

const getBlogs = async()=>{
  const query = `*[_type == "post"] | order(_createdAt asc) { _id, title,slug, image, courtdescription, body }`

  const data = await client.fetch(query)
  return data
}

export const revalidate = 0
const Blog = async() => {
  const data = await getBlogs()

  return (
    <main className='py-10'>
      <div className='container center flex items-center justify-center'>
      <h1 className='text-xl md:text-4xl lg:text-6xl font-bold text-mainColor'>Mes Blogs 📣</h1>

      </div>

      <div className="container center grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-4">
          {data.map((blog)=>{
            return(
              <Link href={`blog/${blog.slug.current}`} key={blog._id} className="border w-full group flex flex-col">

                <div className="h-[200px] w-auto overflow-hidden">
                  <Image src={urlFor(blog.image).url()} alt={blog?.title} width={500} height={500} className="h-full w-full object-cover transition-all duration-200 group-hover:scale-110"/>
                </div>
                <div className="p-2 flex flex-col justify-between flex-grow">
                  <h3 className="font-bold text-base">

                  {blog.title}
                  </h3>

                  <p className="text-sm line-clamp-3 mt-2 text-mainColor/60">{blog.courtdescription}</p>

                  <div  className="text-sm  mt-10 block">Lire la suite →</div>
                </div>
              </Link>
            )
          })}

      </div>


    </main>
  )
}

export default Blog