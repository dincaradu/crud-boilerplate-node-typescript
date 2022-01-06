// 3rd party modules
import express, { Request, Response, NextFunction } from 'express';

// Utility functions
import { Warn } from '../_lib/helpers/pretty-logging.helper';

// Variable definitions
import { BASE_PATH } from '../_config/env.config';

// Import model definitions
import iUser from '../interfaces/user.interface';

class ProfileController {
  public router = express.Router();
  public path = BASE_PATH;

  private entities: iUser[] = [];

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.post(this.path + 'login', this.login);
    this.router.post(this.path + 'register', this.register);
    this.router.post(this.path + 'resetPassword', this.resetPassword);
    this.router.post(this.path + 'updatePassword', this.updatePassword);
    this.router.get(this.path + 'profile', this.getProfile);
    this.router.put(this.path + 'profile', this.updateProfile);
  }

  private login = (req: Request, res: Response, next: NextFunction) => {
    Warn( 'Login has been called' );
    res.json({message: 'Login has been called'});
  }

  private register = (req: Request, res: Response, next: NextFunction) => {
    Warn( 'register has been called' );
    res.json({message: 'register has been called'});
  }

  private resetPassword = (req: Request, res: Response, next: NextFunction) => {
    Warn( 'resetPassword has been called' );
    res.json({message: 'resetPassword has been called'});
  }

  private updatePassword = (req: Request, res: Response, next: NextFunction) => {
    Warn( 'Update password has been called' );
    res.json({message: 'Update password has been called'});
  }

  private getProfile = (req: Request, res: Response, next: NextFunction) => {
    Warn( 'Get profile has been called' );
    res.json({message: 'Get profile has been called'});
  }

  private updateProfile = (req: Request, res: Response, next: NextFunction) => {
    Warn( 'Update profile has been called' );
    res.json({message: 'Update profile has been called'});
  }
}

export default ProfileController;
