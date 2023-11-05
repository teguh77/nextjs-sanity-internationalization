import { getPostsByLang } from '@/sanity/sanity.utils';
import Link from 'next/link';

type Props = {
  params: { lang: string; slug: string };
};
export default async function Home({ params }: Props) {
  const posts = await getPostsByLang(params.lang);

  return (
    <>
      <h1>Home</h1>
      <div className="flex">
        {posts?.map((post) => (
          <Link
            key={post._id}
            className="p-8 border border-black rounded-md"
            href={`${post.language}/${post.slug[post.language].current}`}
          >
            <h2>Title : {post.title}</h2>
            <p>Description : {post.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
