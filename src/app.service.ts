import { Injectable } from '@nestjs/common';

import { getConnection } from 'typeorm';
import { Profile } from './entitys/profile';
import { User } from './entitys/user';

@Injectable()
export class AppService {
  constructor(){
    
  }
  
  getHello(): string {
    return 'Hello World!';
  }
  async create2t(){
  const profile = new Profile();
profile.gender = "male";
profile.photo = "me.jpg";
await Profile.save(profile);

const user = new User();
user.name = 'Joe Smith';
user.profile = profile;
await User.save(user);
}

async QueryBuilder(){
const pro=  await getConnection()
    .getRepository(Profile)
    .createQueryBuilder("profile")
    .leftJoinAndSelect("profile.user", "user")
    .getMany();
    return pro
}
public async findOne(id: number) {
  // return `This action returns a #${id} user`;
  // return await (await User.findOne(id,{relations:['p']}))
   return await  (await User.findOne(id,{relations:['profile']})).profile



  //  const usergRepository = getConnection().getRepository(User);
}
  
}
