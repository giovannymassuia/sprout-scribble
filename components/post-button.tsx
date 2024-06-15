'use client';

import { useFormStatus } from 'react-dom';

export default function PostButton() {
    const { pending } = useFormStatus();
    return (
        <button
            className="bg-blue-600 disabled:opacity-50"
            disabled={pending}
            type="submit"
        >
            Submit
        </button>
    );
}
