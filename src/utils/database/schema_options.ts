import { SchemaOptions as Options } from "@nestjs/mongoose";

export const SchemaOptions: Options = {
    validateBeforeSave: true,
    timestamps: true,
    versionKey: false,
};
