import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsResolver } from './skills.resolver';
import {MongooseModule} from "@nestjs/mongoose";
import {SkillDocument, SkillSchema} from "./entities/skill.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SkillDocument.name, schema: SkillSchema },
    ]),
  ],
  providers: [SkillsResolver, SkillsService]
})
export class SkillsModule {}
