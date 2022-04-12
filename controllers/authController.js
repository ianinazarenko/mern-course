async function register(req, res) {
  res.send('Register')
}

async function login(req, res) {
  res.send('Login')
}

async function updateUser(req, res) {
  res.send('Update user')
}

export { register, login, updateUser }
