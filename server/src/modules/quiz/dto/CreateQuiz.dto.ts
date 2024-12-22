import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
@IsNotEmpty({message: 'quiz should have a title'})
@Length(3,255)
    title:string;
    description: string
}