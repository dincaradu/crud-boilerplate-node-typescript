import HttpException from './http.exception';

class WrongCredentialsException extends HttpException {
  constructor() {
    super(404, 'The credentials you provided do not match any account in our database');
  }
}

export default WrongCredentialsException;
