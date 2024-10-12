import { createUserDtos } from 'src/dtos/user.module.dtos';
export declare class UserController {
    createUser(createUser: createUserDtos): Promise<{
        password: any;
        name: string;
        phone: string;
        email: string;
        cpf: string;
    }>;
}
