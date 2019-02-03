/*
we need to determine the DTO (Data Transfer Object) schema. 
A DTO is an object that defines how the data will be sent over
the network
*/
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
