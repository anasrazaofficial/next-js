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

## JavaScript Mastery

### Dynamic Routing

To handle dynamic routing, we need to name of folder in square brackets, i.e.

```Shell
└── app/
    ├── product/
    │    ├── page.js
    │    └── [productId] # folder name
    │        └── page.js
```

In this example, app contains a folder named product and inside it, there's a folder [productId] which is the slug in routes,\
`https://example.com/products/:productId`.
Inside this file, we can also access the slug easily by just writing it.

```jsx
const page = () => {
  return (
    <div>{productId}</div>
  )
}
export default page
```

### Data Fetching

There are 3 types of data fetching in Nextjs:

1. **Server Side Rendering (SSR)**: Data is fetched from the server everytime, `{ cache: "no-store" }`.
2. **Static Site Generation (SSG)**: 1st time when API is called data is fetched from the server & stored in the cache. Then it'll get that data from cache. Ideal for content that doesn't change frequently. **Default** fetching in Next.js.
3. **Incremental Site Generation (ISG)**: Data fetched & stored in cache, but will re-fetched after a certain time. `{ next: { revalidate: n(seconds) } }`.

### Creating a Google App for OAuth

1. Go to [console.cloud.google.com](https://console.cloud.google.com/)
2. Click on the current selected project and create new project, for eg: `my-app`
3. Select new `my-app`
4. Open sidebar and click on **APIs & Services** > **OAuth consent screen**
5. Enter **App name** & **User supported email**
6. Enter **Developer contact information (email)**
7. Click **Save and Continue**
8. Go to **Credentials** tab
9. Click on **Create Credentials** > **OAuth Client ID**
10. Select **Web application**
11. Enter the URIs in **Authorized JavaScript origins** && **Authorized redirect URIs** (`http://localhost:3000`)
12. Click on **Create**
13. Save credentials (Client ID, Client secret)

### Model Reusing

In NextJS, APIs are serverless by default, meaning the backend is not always running, it only runs (setting-up backend, model-defining) when the API is being called. So, if the model is already created, then we must reuse it instead of creating it again.

```javascript
const UserSchema = new Schema({ email: String, username:String });
const User = models.User || model('User', UserSchema);
export default User;
```

### Next-Auth Configuration

You need 3 variables to configure next-auth:

- NEXTAUTH_URL = <http://localhost:PORT>
- NEXTAUTH_URL_INTERNAL = <http://localhost:PORT>

- NEXTAUTH_SECRET
  - Go to [next-auth/configuration/options](https://next-auth.js.org/configuration/options#nextauth_secret)
  - Copy the command
  - Go to [cryptool](https://www.cryptool.org/en/cto/openssl/)
  - Enter command and get the secret key
