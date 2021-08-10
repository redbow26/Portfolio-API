import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSkillInput {
  @Field({ description: 'Name of this skill' })
  name: string;

  @Field(() => Int, { description: 'Level of this skill' })
  level: number;

  @Field(() => Int, { description: 'Priority of this skill' })
  priority: number;
}
