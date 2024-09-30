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
