import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';

import EmailAlreadyRegisteredException from '../exceptions/email-already-registered.exception';

import iDataStoredInToken from '../interfaces/data-stored-in-token.interface';
import iTokenData from '../interfaces/token-data.interface';
import iUser from '../interfaces/user.interface';

import RegisterDto from '../validators/profile/register.dto';

import User from '../entities/user.entity';
import { JWT_SECRET } from '../../_config/env.config';

class AuthenticationService {
  private userRepository = getRepository(User);
  private options = { algorithm: 'HS256', keyid: '1', noTimestamp: false, expiresIn: '1h', notBefore: '2s' };

  public async register(userData: RegisterDto) {
    if (await this.userRepository.findOne({ email: userData.email })) {
      throw new EmailAlreadyRegisteredException(userData.email);
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    delete userData.password;

    const savedUser = await this.userRepository.create({
      ...userData,
      hash: hashedPassword,
    });

    const tokenData = this.createToken(savedUser);
    const cookie = this.createCookie(tokenData);

    return {
      cookie,
      savedUser,
    };
  }

  public createCookie(tokenData: iTokenData) {
    return `Authorization=${tokenData.token}; HttpOnly; Domain=localhost; Max-Age=${tokenData.expiresIn}`;
  }

  public decodeToken(token: string) {
    const decodedValue = jwt.verify(token, JWT_SECRET);

    return decodedValue;
  }

  // public refresh (token: string) {
  //   const originalDecoded = jwt.decode(token, { complete: true });
  //   let refreshed = jwt.refresh(originalDecoded, 3600, JWT_SECRET)
  // }

  public createToken(user: iUser): iTokenData {
    const expiresIn = 60 * 60; // an hour
    const secret = JWT_SECRET;
    const dataStoredInToken: iDataStoredInToken = {
      ...user,
      id: user.id
    };

    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, secret),
    };
  }
}

export default AuthenticationService;
