import { resources } from '../../core/resources';
import { User } from '../../models/user/user';
import { ServiceBase } from '../service-base';
import { IUserService } from './user-service.interface';

/**
 * A service to work with user.
 */
export class UserService extends ServiceBase implements IUserService {
    /**
     * @inheritDoc
     */
    public getByAuthToken(): Promise<User> {
        return this.httpClient.get(resources.user);
    }

    /**
     * @inheritDoc
     */
    public updateByAuthToken(user: User): Promise<void> {
        return this.httpClient.put(resources.user, user);
    }

}
