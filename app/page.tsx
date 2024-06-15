import PostButton from '@/components/post-button';
import createPost from '@/server/actions/create-post';
import getPosts from '@/server/actions/get-posts';

export default async function Home() {
    const data = await getPosts();

    if (!data.success) {
        return <main className="text-center">{data.message}</main>;
    }

    return (
        <main>
            {data.data?.map((post) => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                </article>
            ))}

            <form action={createPost}>
                <input
                    className="bg-black"
                    type="text"
                    name="title"
                    placeholder="Title"
                />
                <PostButton />
            </form>
        </main>
    );
}
