import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true, unique: true})
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({default: now()})
    createdAt: Date;

    @Prop({default: now()})
    updatedAt: Date;

    // if relation is needed
    // inside the class definition
    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    // user: User;
}

export const UserSchema = SchemaFactory.createForClass(User);