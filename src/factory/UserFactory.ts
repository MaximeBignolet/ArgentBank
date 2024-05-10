import { User } from "../models/User";

export class UserFactory {
  static createUserFromJson(json: Record<string, any>): User {
    return new User({
      email: json.email,
      firstname: json.firstname,
      lastname: json.lastname,
    });
  }
}
