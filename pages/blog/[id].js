// import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import blogPosts from '../../public/blogPosts.json'
import MoreBlogPostsSection from '../../components/MoreBlogPostsSection'
import CaseStudyConsultFooter from '../../components/CaseStudyConsultFooter'
import BlogHeaderImage from '../../public/placeholderImage.jpg'

const BlogPost = ({blogData}) => {
  return (
    <div className='pt-[100px]'>
      <Head>
        <title>{blogData.slug}</title>
      </Head>

      {/* Post Content Wrapper */}

      <div className='m-auto w-[90%] max-w-[768px]'>
        <Link href='/blog'>
          <button className='primaryButton mb-8 !px-[60px]'>
            Back to Blog
          </button>
        </Link>
        <img src={BlogHeaderImage.src} className='h-[150px] md:h-[250px] w-[100%] object-cover mb-[30px] shadow-xl'/>
        <h1 className='text-2xl md:text-3xl'>{blogData.title}</h1>
        <p className='text-sm'>{blogData.author} - {blogData.date} | Read Time: 8 Minutes</p>
        {blogData.content.map((contentSection, index) => (
          <div className='mt-8' key={`${blogData.slug} - contentSections - ${index}`}>
            <div className='grid grid-cols-[10px_1fr] items-center mb-[20px]'>
              <div className='w-[3px] h-[30px] bg-[#004BFA] mr-[5px]' />
              <h2 className='text-xl md:text-2xl font-medium'>{contentSection.title}</h2>
            </div>
            <p className='text-sm whitespace-pre-line'>{contentSection.text}</p>
            {contentSection.note &&
              <p className='text-sm mt-8'>{contentSection.note}</p>
            }
          </div>
        ))}
        <CaseStudyConsultFooter />
        <MoreBlogPostsSection posts={blogPosts} />
        <Link href='/blog'>
          <button className='primaryButton mb-4 !px-[60px]'>
            Back to Blog
          </button>
        </Link>
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