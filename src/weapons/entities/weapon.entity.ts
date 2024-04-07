import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEnum, IsOptional } from "class-validator";

@Schema()
export class Weapon {
    @Prop({ required: true })
    name: string;

    @Prop()
    @IsOptional()
    melee?: boolean;

    @Prop()
    @IsOptional()
    category?: number;

    @Prop()
    @IsOptional()
    damage?: string;

    @Prop()
    @IsOptional()
    attack?: number;

    @Prop()
    @IsOptional()
    defense?: number;

    @Prop()
    @IsOptional()
    distance?: number;

    @Prop()
    @IsOptional()
    twoHands?: boolean;
}

export const WeaponSchema = SchemaFactory.createForClass(Weapon);