import bcrypt from 'bcryptjs'

const users = [
    {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
    },
    {
        name: 'John Yu',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Jack Cork',
        email: 'jack@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users