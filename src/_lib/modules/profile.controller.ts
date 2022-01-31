// 3rd party modules
import express, { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';

// Utility functions
import { Warn } from '../helpers/pretty-logging.helper';

// Service definitions
import AuthenticationService from '../services/authentication.service';

// Middleware & Exceptions definitions
import validationMiddleware from '../middleware/validation.middleware';
import EmailAlreadyRegisteredException from '../exceptions/email-already-registered.exception';
import WrongCredentialsException from '../exceptions/wrong-credentials.exception';

// Import model, DTO & Entity definitions
import iUser from '../interfaces/user.interface';

// Validator Definitions
import LoginDto from '../validators/profile/login.dto';
import RegisterDto from '../validators/profile/register.dto';
import ResetPasswordDto from '../validators/profile/reset-password.dto';
import ForgotPasswordDto from '../validators/profile/forgot-password.dto';
import UpdatePasswordDto from '../validators/profile/update-password.dto';
import UpdateProfileDto from '../validators/profile/update-profile.dto';
import UnlockSessionDto from '../validators/profile/unlock-session.dto';

// Entities definitions
import User from '../entities/user.entity';
import Controller from '../interfaces/controller.interface';

class ProfileController implements Controller {
  public router = express.Router();
  public path = '/auth/';

  private authService = new AuthenticationService();

  private entities: iUser[] = [];
  private userRepository = getRepository(User);

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    // Authentication and authorization endpoints
    this.router.post(this.path + 'login', validationMiddleware(LoginDto), this.login);
    this.router.post(this.path + 'register', validationMiddleware(RegisterDto), this.register);
    this.router.post(this.path + 'refresh-access-token', this.refreshAccessToken);
    this.router.post(this.path + 'forgot-password', validationMiddleware(ForgotPasswordDto), this.forgotPassword);
    this.router.post(this.path + 'reset-password', validationMiddleware(ResetPasswordDto), this.resetPassword);
    this.router.post(this.path + 'update-password', validationMiddleware(UpdatePasswordDto), this.updatePassword);
    this.router.post(this.path + 'unlock-session', validationMiddleware(UnlockSessionDto), this.unlockSession);

    // Profile endpoints
    this.router.get('profile', this.getProfile);
    this.router.put('profile', validationMiddleware(UpdateProfileDto), this.updateProfile);
  }

  private login = async (req: Request, res: Response, next: NextFunction) => {
    Warn( `Login has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }` );

    // Assign login data
    const loginData: LoginDto = req.body;

    // Find the user by email address
    const user = await this.userRepository.findOne({ email: loginData.email });

    // If the user is found
    if (user) {
      // compare passwords
      const isPasswordMatching = await bcrypt.compare(req.body.password, user.hash);

      // and if passwords match
      if (isPasswordMatching) {
        // remove the hash
        delete user.hash;
        // create the token out of it
        const { expiresIn, token } = this.authService.createToken(user);

        // and return it to the frontend
        res.setHeader('Set-Cookie', [this.authService.createCookie({ expiresIn, token })]);
        res.send({ user, accessToken: token });
      } else {
        // or if the passwords don't match return an exception
        next(new WrongCredentialsException());
      }
    } else {
      // or if no user is font return an exception
      next(new WrongCredentialsException());
    }
  }

  private register = async (req: Request, res: Response, next: NextFunction) => {
    Warn( `Register has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }` );

    // Asign the user user data
    const userData: RegisterDto = req.body;

    // Try to create the new user
    try {
      // call the auth service to register the user data
      const {
        cookie,
        savedUser,
      } = await this.authService.register(userData);

      // Set the headers and return the new user
      res.setHeader('Set-Cookie', [cookie]);
      res.send(savedUser);

    // or catch any errors that might be thrown by the service
    } catch (error) {
      next(error);
    }
  }

  private logout = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Set-Cookie', ['Authorization=;Max-age=0']);
    res.send(200);
  }

  private resetPassword = (req: Request, res: Response, next: NextFunction) => {
    Warn( `Reset password has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }` );
    res.json({message: `Reset password has been called`});
  }

  private updatePassword = (req: Request, res: Response, next: NextFunction) => {
    Warn( `Update password has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }` );
    res.json({message: `Update password has been called`});
  }

  private forgotPassword = (req: Request, res: Response, next: NextFunction) => {
    Warn( `Forgot password has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }` );
    res.json({message: `Forgot password has been called`});
  }

  private refreshAccessToken = (req: Request, res: Response, next: NextFunction) => {
    Warn( `Refresh access token has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }` );

    const token = req.body.accessToken;
    const user = this.authService.decodeToken(token);

    console.log('decoded user', user);

    // const { expiresIn, token } = this.authService.createToken(user);

    // and return it to the frontend
    // res.setHeader('Set-Cookie', [this.authService.createCookie({ expiresIn, token })]);
    // res.send({ user, accessToken: token });

    // res.json({message: `Refresh access token has been called`});
    res.send({ user, accessToken: token });
  }

  private unlockSession = (req: Request, res: Response, next: NextFunction) => {
    Warn( `Unlock session has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }` );
    res.json({message: `Unlock session has been called`});
  }

  private getProfile = (req: Request, res: Response, next: NextFunction) => {
    Warn( `Get profile has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }` );
    res.json({message: `Get profile has been called`});
  }

  private updateProfile = (req: Request, res: Response, next: NextFunction) => {
    Warn( `Update profile has been called ${ JSON.stringify(req.body) }, ${ JSON.stringify(req.params) }, ${ JSON.stringify(req.query) }` );
    res.json({message: `Update profile has been called`});
  }
}

export default ProfileController;
