import bcrypt from 'bcryptjs'

const user = [
  {
    email: 'MuhammadUsama@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    email: 'hamid@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    email: 'ahmed@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default user
