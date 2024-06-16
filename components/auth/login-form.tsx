'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { AuthCard } from './auth-card';
import { LoginSchema } from '@/types/login-schema';
import { z } from 'zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

export const LoginForm = () => {
    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data: z.infer<typeof LoginSchema>) => {
        console.log(data);
    };

    return (
        <AuthCard
            cardTitle="Welcome back!"
            backButtonHref="/auth/register"
            backButtonLabel="Create an account"
            showSocial
        >
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Email address"
                                                type="email"
                                            />
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Password"
                                                type="password"
                                                autoComplete="current-password"
                                            />
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                size="sm"
                                variant="link"
                                asChild
                            >
                                <Link href="/auth/forgot-password">Forgot password?</Link>
                            </Button>
                        </div>

                        <Button
                            type="submit"
                            className="w-full my-2"
                        >
                            Login
                        </Button>
                    </form>
                </Form>
            </div>
        </AuthCard>
    );
};
