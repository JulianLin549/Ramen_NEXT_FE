import {UserRole} from '../enums/UserRole';
export interface IUser {
    username?:string,
    avatar: string ,
    isVerified: boolean,
    userRole: UserRole,
    hasStore: any,
    notifications: any,
    followedStore: any,
    reviews: any,
    _id: string,
    fbUid: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}


