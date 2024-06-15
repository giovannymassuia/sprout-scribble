'use server';

import { db } from '@/server';

export default async function getPosts() {
    const posts = await db.query.posts.findMany();

    if (!posts) {
        return {
            success: false,
            message: 'No posts found'
        };
    }

    return {
        success: true,
        data: posts
    };
}
