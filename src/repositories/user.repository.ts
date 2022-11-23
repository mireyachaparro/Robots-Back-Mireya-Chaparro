import { User, UserI } from '../entities/user.entitie.js';
import { passwdEncrypt } from '../services/auth.js';
import { BasicRepo, id } from './repo.js';

export class UserRepository implements BasicRepo<UserI> {
    static instance: UserRepository;

    public static getInstance(): UserRepository {
        if (!UserRepository.instance) {
            UserRepository.instance = new UserRepository();
        }
        return UserRepository.instance;
    }

    #Model = User;

    async get(id: id): Promise<UserI> {
        const result = await this.#Model.findById(id); //as User;
        if (!result) throw new Error('Not found id');
        return result;
    }

    async post(data: Partial<UserI>): Promise<UserI> {
        // ESTO HACE REGISTER
        if (typeof data.passwd !== 'string') throw new Error('');
        data.passwd = await passwdEncrypt(data.passwd);
        const result = await this.#Model.create(data);
        return result;
    }

    async find(search: { [key: string]: string }): Promise<UserI> {
        console.log({ search });
        const result = await this.#Model.findOne(search); //as User;
        if (!result) throw new Error('Not found id');
        return result;
    }
}
