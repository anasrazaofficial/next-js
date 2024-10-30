# next-js

## Chai aur code

### Mongoose

- `Document` in mongoose in use for type validation.
- We can create a Mongoose Schema with type validation in such a way,

 ```javascript
 export interface Message extends Document {
    content: String;
    createdAt: Date;
}
 
 const MessageSchema: Schema<Message> = new Schema({...});
 ```

- We can pass a `match` property mostly in emails to validate email as a valid format,

 ``` javascript
 email: {
        type: String,
        ...,
        match: [regex (/.+\@.+\..+/), Message("Please provide a valid email address")]
    }
 ```

>[Code Sample](./src/model/User.ts)

### Zod

Zod is a typescript schema validation library.
>[Code Sample](./src/schema/signupSchema.ts)

### Points for TypeScript

- `type` is use to declare a new type, just like a interface in Java (defines a structure without implementation). [Code Sample](./src/lib/dbConnect.ts)

### Extra Key Points

- **Identifier** is a term used in production for unique values used in credentials like, username, email, etc.

## Programming with Mosh

### How to install nextjs

1. `npx create-next-app@latest`.
2. Name of project or `.` if want to use the name of your current directory name.
3. Typescript? Recommended: Yes
4. ESLint? (A tool that tells common errors like syntax, formatting, etc.) - Recommended: Yes
5. Tailwind? Recommended: Yes
6. src directory? Recommended: Yes
7. App router? Recommended: Yes
8. alias? Recommended: No

> These steps could be changed or replaced based on its version

### Routing

- Routing system is based on convention in nextjs.
- Naming file as `page.jsx` or `page.tsx` a folder with your required module name, i.e, `Home`.
- This folder name will be your route.
- You can further create more routes by creating sub folders and `page.jsx` file.
- Those routes or folders are not accessible which does not have a `page.jsx` file in it.

### Client-side rendering

- Everything in nextjs is rendered on server side to lower the load. But if we add javascript in it. It gives an error telling us to render that on client side. To get rid of this error, we need to add `'user client';` on the top of the file.
- For this approach we can create a component for these type of rendering.

> Just like [this](./programming-with-mosh/my-first-app/src/app/components/ProductCard.jsx).

### Caching

- Storing data somewhere that is faster to access. Time duration series for getting data: network > file system > memory.
- NextJs has a built-in data cache. When we fetch anything nextjs stores it in cache data, so next time we will hit the same API or URL, it gets from cache data.
- But if the data changes frequently, we need data from network. To do that we can pass second argument as:
  - `{ cache: "no-store" }`: When data changes frequently.
  - `{ next: { revalidate: 10 } }`: NextJs will fetch data every 10 seconds (a background process).

> Warning: This caching data is only supported in `fetch` function. If we use any library like `axios`, we will not be able to access the cache data.\
 Demo: [Users.jsx](./programming-with-mosh/my-first-app/src/app/users/page.jsx)

### Static Vs Dynamic Rendering

- Static Rendering means rendering data at once at build time, while dynamic rendering occurs at request time.
- If caching is enabled then nextjs will consider static rendering as default.
- To test it, you can show date, build and run it.

> It'll not work on development environment, that's why we need to build it first.
