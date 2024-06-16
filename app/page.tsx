import PostButton from '@/components/post-button';
import createPost from '@/server/actions/create-post';
import getPosts from '@/server/actions/get-posts';

export default async function Home() {
    const data = await getPosts();

    if (!data.success) {
        return <main className="text-center">{data.message}</main>;
    }

    return <main>hey</main>;
}
