import { Schema, Document, models, Model, model } from "mongoose";

export interface Message extends Document {
    content: String;
    createdAt: Date;
};

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now())
    }
});


export interface User extends Document {
    username: String;
    email: String;
    password: String;
    otp: String;
    isVerified: Boolean;
    otpExpiryDate: Date;
    isAcceptingMessage: Boolean;
    messages: Message[];
};

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Please provide the username"],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please provide the email"],
        unique: true,
        match: [/.+\@.+\..+/, "Please provide a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Please provide the password"]
    },
    otp: {
        type: String,
        required: [true, "Please provide the otp"]
    },
    otpExpiryDate: {
        type: Date,
        required: [true, "Please provide the otp expiry date"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]
});

const UserModel = models.User as Model<User> || model<User>("User", UserSchema);
export default UserModel;
