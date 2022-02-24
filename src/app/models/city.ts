import {Photo} from "./photo";

export interface City{
  id:number;
  name:string;
  description:string;
  userId:number;
  photos:Photo[];
  photoUrl:string;
}
