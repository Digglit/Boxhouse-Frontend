// import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import blogPosts from '../../public/blogPosts.json'
import MoreBlogPostsSection from '../../components/MoreBlogPostsSection'

const BlogPost = ({blogData}) => {
  return (
    <div className='pt-[100px]'>
      <Head>
        <title>{blogData.slug}</title>
      </Head>

      {/* Post Content Wrapper */}

      <div className='m-auto w-[95%] max-w-[768px]'>
        <Link href='/blog'>
          <button className='primaryButton mb-8'>
            Back to Blog
          </button>
        </Link>
        <h1 className='text-4xl'>{blogData.title}</h1>
        <p className='text-sm pb-4'>{blogData.author} - {blogData.date} | Read Time: 8 Minutes</p>
        <p>{blogData.content}</p>
        {/* <img src={blogData.image} style={{height: 400, width: 400}} /> */}
        <Link href='/blog'>
          <button className='primaryButton'>
            Back to Blog
          </button>
        </Link>
        <MoreBlogPostsSection posts={blogPosts} />
      </div>
      {/* End Post Content Wrapper */}

    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const req = await fetch(`http://localhost:3000/${id}.json`)
  const data = await req.json()

  return {
    props: {
      blogData: data
    }
  }
}

export const getStaticPaths = async () => {
  // Fetch the list of blog post IDs from the API
  const res = await fetch('http://localhost:3000/blogPosts.json');
  const posts = await res.json();

  // Generate the paths for the blog post pages
  const paths = posts.map((blogData) => ({
    params: { id: blogData.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default BlogPost