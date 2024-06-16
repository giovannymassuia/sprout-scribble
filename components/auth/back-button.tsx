'use client';

import Link from 'next/link';
import { Button } from '../ui/button';

type Props = {
    href: string;
    label: string;
};

export default function BackButton({ href, label }: Props) {
    return (
        <Button variant="secondary">
            <Link
                href={href}
                aria-label={label}
            >
                {label}
            </Link>
        </Button>
    );
}
