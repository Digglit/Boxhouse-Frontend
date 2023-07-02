// import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

const BlogPost = ({blogData}) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Head>
        {/* <title>Blog Post {id}</title> */}
      </Head>
      {/* <h1>Blog Post {id}</h1> */}
      {/* <img src={blogData.image} style={{height: 400, width: 400}} /> */}
      <Link href='/blog'>
        <button>
          Back
        </button>
      </Link>
    </>
  )
}

// export const getStaticProps = async ({ params }) => {

//   console.log(params)

//   const req = await fetch(`http://localhost:3000/${params.id}.json`)
//   const data = await req.json()

//   return {
//     props: {
//       blogData: data
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   // Fetch the list of blog post IDs from the API
//   const res = await fetch('http://localhost:3000/blogPosts.json');
//   const blogIds = await res.json();

//   // Generate the paths for the blog post pages
//   const paths = blogIds.map((id) => ({
//     params: { id },
//   }));

//   console.log(paths)

//   return {
//     paths,
//     fallback: false,
//   };
// }

export default BlogPost