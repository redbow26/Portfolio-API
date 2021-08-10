import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field({ description: 'Name of this skill' })
  name: string;

  @Field(() => Int, { description: 'Level of this skill' })
  level: number;

  @Field(() => Int, { description: 'Priority of this skill' })
  priority: number;
}
