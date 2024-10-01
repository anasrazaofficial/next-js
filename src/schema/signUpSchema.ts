import { z } from "zod";

export const usernameValidation = z.
    string()
    .min(2, "Username must be at least 2 characters")
    .max(20, "Username must not exceed 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters"); // Checking regex

export const signupValidation = z.object({  // `z.object({...})` for objects having properties that need to be validated
    username: usernameValidation,
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters")
});