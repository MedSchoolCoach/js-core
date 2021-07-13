/**
 * Model contains user data.
 */
export class User {
    public id?: string;
    public email?: string;
    public phone?: string;
    public emailVerified?: boolean;
    public name?: string;
    public firstName?: string;
    public lastName?: string;
    public picture?: string;
    // tslint:disable-next-line:no-any
    public additional?: any;
}
