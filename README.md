# next-js

## Mongoose

1. `Document` in mongoose in use for type validation.
2. We can create a Mongoose Schema with type validation in such a way,

 ```javascript
 export interface Message extends Document {
    content: String;
    createdAt: Date;
}
 
 const MessageSchema: Schema<Message> = new Schema({...});
 ```

3. We can pass a `match` property mostly in emails to validate email as a valid format,

 ``` javascript
 email: {
        type: String,
        ...,
        match: [regex (/.+\@.+\..+/), Message("Please provide a valid email address")]
    }
 ```

>[Code Sample](./src/model/User.ts)

## Zod

Zod is a typescript schema validation library.
>[Code Sample](./src/schema/signupSchema.ts)

## Extra Key Points

1. **Identifier** is a term used in production for unique values used in credentials like, username, email, etc.
