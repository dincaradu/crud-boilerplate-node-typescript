// 3rd party modules
import express, { Request, Response } from 'express';

// Utility functions
import { Warn } from '../_lib/helpers/pretty-logging.helper';

// Define the model
import iUser from '../interfaces/user.interface';

class ProfileController {
  public router = express.Router();

  private entities: iUser[] = [];

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.post('login', this.login);
    this.router.post('register', this.register);
    this.router.post('resetPassword', this.resetPassword);
    this.router.post('updatePassword', this.updatePassword);
    this.router.get('profile', this.get);
    this.router.put('profile', this.update);
  }

  private login = (req: Request, res: Response) => {
    Warn( 'Login has been called' );
    res.json({message: 'Login has been called'});
  }

  private register = (req: Request, res: Response) => {
    Warn( 'Register has been called' );
    res.json({message: 'Register has been called'});
  }

  private resetPassword = (req: Request, res: Response) => {
    Warn( 'Register has been called' );
    res.json({message: 'Register has been called'});
  }

  private updatePassword = (req: Request, res: Response) => {
    Warn( 'Register has been called' );
    res.json({message: 'Register has been called'});
  }

  private get = (req: Request, res: Response) => {
    Warn( 'Register has been called' );
    res.json({message: 'Register has been called'});
  }

  private update = (req: Request, res: Response) => {
    Warn( 'Register has been called' );
    res.json({message: 'Register has been called'});
  }
}

export default ProfileController;
