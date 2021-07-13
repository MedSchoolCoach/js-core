import { User } from '../../models/user/user';
export interface IUserService {
    /**
     * Returns user by provided auth token.
     */
    getByAuthToken(): Promise<User>;
    /**
     * Update user by provided auth token.
     */
    updateByAuthToken(user: User): Promise<void>;
}
