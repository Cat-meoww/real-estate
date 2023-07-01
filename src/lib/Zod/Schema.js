import { z } from 'zod';
export const RegisterAgentSchema = z
    .object({
        name: z
            .string({ required_error: 'Name is required' })
            .trim()
            .min(1, { message: 'Name is required' })
            .max(64, { message: 'Name must be less than 64 characters' }),

        email: z
            .string({ required_error: 'Email is required' })
            .min(1, { message: 'Email is required' })
            .max(64, { message: 'Email must be less than 64 characters' })
            .email({ message: 'Email must be a valid email address' }),
        phone: z
            .number({ required_error: 'Phone is required' })
            .gt(999999999, { message: 'Phone must be a valid number' })
            .lt(9999999999, { message: 'Phone must be a valid number' }),
        password: z
            .string({ required_error: 'Password is required' })
            .min(6, { message: 'Password must be at least 6 characters' })
            .max(32, { message: 'Password must be less than 32 characters' })
            .trim(),
        passwordConfirm: z
            .string({ required_error: 'Password is required' })
            .min(6, { message: 'Password must be at least 6 characters' })
            .max(32, { message: 'Password must be less than 32 characters' })
            .trim()
    })
    .superRefine(({ passwordConfirm, password }, ctx) => {
        if (passwordConfirm !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'Password and Confirm Password must match',
                path: ['password']
            });
            ctx.addIssue({
                code: 'custom',
                message: 'Password and Confirm Password must match',
                path: ['passwordConfirm']
            });
        }
    });