'use server';

import { db } from '@/server';
import { posts } from '../schema';
import { revalidatePath } from 'next/cache';

export default async function createPost(formData: FormData) {
    const title = formData.get('title') as string;

    if (!title) {
        return {
            success: false,
            message: 'Title is required'
        };
    }

    const post = await db.insert(posts).values({
        title
    });

    revalidatePath('/');

    return {
        success: true,
        data: post
    };
}
