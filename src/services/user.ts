import { prismaClient } from "../clients/db";

export class UserService{
    public static followUser(from:string,to :string){
        return prismaClient.follows.create({
            data:{
                follower:{connect:{id:from}},
                following:{connect:{id:to}}
            }
        })
    }
    public static unFollowUser(from:string,to :string){
        return prismaClient.follows.delete({
            where:{
                followerId_followingId:{
                    followerId:from,
                    followingId:to
                }
            }
        })
    }
}