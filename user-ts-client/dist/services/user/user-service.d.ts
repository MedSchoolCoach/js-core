import { User } from '../../models/user/user';
import { ServiceBase } from '../service-base';
import { IUserService } from './user-service.interface';
/**
 * A service to work with user.
 */
export declare class UserService extends ServiceBase implements IUserService {
    /**
     * @inheritDoc
     */
    getByAuthToken(): Promise<User>;
    /**
     * @inheritDoc
     */
    updateByAuthToken(user: User): Promise<void>;
}
