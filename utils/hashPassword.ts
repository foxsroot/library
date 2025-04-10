import bcrypt from 'bcrypt';

export const hashPassword = async (plainPassword: string) => {
    const saltRounds = 10;
    return await bcrypt.hash(plainPassword, saltRounds);
}