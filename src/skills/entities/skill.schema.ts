import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {SchemaOptions} from "../../utils/database/schema_options";

@Schema(SchemaOptions)
export class SkillDocument extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, min: 0, max: 100 })
    level: number;

    @Prop({ required: true, default: 0})
    priority: number;
}

export const SkillSchema = SchemaFactory.createForClass(SkillDocument);


