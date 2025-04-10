import { User, sequelize } from '../models/index';
import { hashPassword  } from '../utils/hashPassword';

async function insertUsers() {
    await sequelize.sync();

    User.bulkCreate([
        {
            name: 'John Doe',
            password: await hashPassword('password123'),
            role: 'user'
        },
        {
            name: 'Jane Smith',
            password: await hashPassword('securepassword'),
            role: 'user'
        },
        {
            name: 'Admin Master',
            password: await hashPassword('adminpassword'),
            role: 'admin'
        }
    ])
}

insertUsers();