import { auth } from '@/server/auth';
import { UserButton } from './user-button';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LogIn } from 'lucide-react';

export default async function Nav() {
    const session = await auth();

    return (
        <header>
            <nav className="py-8">
                <ul className="flex justify-between">
                    <li>Logo</li>
                    {!session ? (
                        <li>
                            <Button asChild>
                                <Link
                                    href="/auth/login"
                                    className="flex gap-2"
                                >
                                    <LogIn />
                                    <span>Login</span>
                                </Link>
                            </Button>
                        </li>
                    ) : (
                        <li>
                            <UserButton
                                expires={session?.expires}
                                user={session?.user}
                            />
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
