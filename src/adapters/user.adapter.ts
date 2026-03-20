import { IUser } from '../models/user.interface';

export class UserAdapter {
  adapt(user: any): IUser {
    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  }
}