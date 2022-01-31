import HttpException from './http.exception';

class EmailAlreadyRegisteredException extends HttpException {
  constructor(email: string) {
    super(400, `There already exists an account with your email address: ${email}`);
  }
}

export default EmailAlreadyRegisteredException;
